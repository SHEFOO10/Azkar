import { useEffect, useState } from "react";
import PrayCard from "./PrayCard";
import { CiLocationOn } from "react-icons/ci";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";

const PrayerTimes = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const governorates = t('governorates', { returnObjects: true })
  const [pray, setPray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGov, setSelectedGov] = useState(governorates[0]);

  const convertTo12HourFormat = (time24) => {
    const [hour, minute] = time24.split(":");
    let hr = parseInt(hour, 10);
    hr = hr % 12 || 12;
    return `${hr}:${minute} `;
  };
  const prayers = t('prayer_times', { returnObjects: true })

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        const formattedDate = `${dd}-${mm}-${yyyy}`;

        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress/${formattedDate}?address=${selectedGov.api},Egypt&method=8`
        );
        const data = await response.json();

        const timings = data.data.timings;
        const prayerTimesArr = [
          {
            name: prayers.fajr_pray,
            time: convertTo12HourFormat(timings.Fajr),
            desc: prayers.daily_pray,
            afternoon: false,
          },
          {
            name: prayers.sunrise_pray,
            time: convertTo12HourFormat(timings.Sunrise),
            desc: prayers.daily_pray,
            afternoon: false,
          },
          {
            name: prayers.dhuhr_pray,
            time: convertTo12HourFormat(timings.Dhuhr),
            desc: prayers.daily_pray,
            afternoon: true,
          },
          {
            name: prayers.asr_pray,
            time: convertTo12HourFormat(timings.Asr),
            desc: prayers.daily_pray,
            afternoon: true,
          },
          {
            name: prayers.maghrib_pray,
            time: convertTo12HourFormat(timings.Maghrib),
            desc: prayers.daily_pray,
            afternoon: true,
          },
          {
            name: prayers.isha_pray,
            time: convertTo12HourFormat(timings.Isha),
            desc: prayers.daily_pray,
            afternoon: true,
          },
        ];

        setPray(prayerTimesArr);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, [selectedGov]);

  return (
    <div>
      <section className="xl:w-2/3 lg:backdrop-blur-lg rounded-xl text-center py-16 px-8 block mx-auto" dir={isArabic ? "rtl" : "ltr"} id='prayer-times'>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {t('navbar.prayer_times')}
        </h2>
        <div className="my-6">
          <select
            id="govSelect"
            value={selectedGov.name}
            onChange={(e) => setSelectedGov(governorates.find(a => a.name === e.target.value))}
            className="p-2 border border-gray-300 rounded-md bg-primary-dark dark:bg-primary-light text-white"
          >
            {governorates.map(({ name }, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex justify-center items-center dark:text-gray-300 mt-2 gap-2">
              <CiLocationOn className="mr-2 not-dark:text-black font-bold" />
              <span dir={i18n.language === 'ar' ? "rtl" : 'ltr'}>
                {
                  i18n.language === 'ar'
                    ? <>{selectedGov.name}، {t('country')}</>
                    : <>{selectedGov.name}, {t('country')}</>
                }

              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl lg:grid-cols-3 gap-6 mt-8 mx-auto justify-items-center">
              {pray.map((prayer, index) => (
                <PrayCard
                  key={index}
                  time={prayer.time}
                  desc={prayer.desc}
                  afternoon={prayer.afternoon}
                  isArabic={i18n.language === 'ar'}
                >
                  {prayer.name}
                </PrayCard>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default PrayerTimes;
