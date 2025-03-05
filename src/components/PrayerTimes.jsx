import { useEffect, useState } from "react";
import PrayCard from "./PrayCard";
import { CiLocationOn } from "react-icons/ci";
import Loading from "./Loading";

const governorates = [
  { ar: "الإسكندرية", en: "Alexandria" },
  { ar: "القاهرة", en: "Cairo" },
  { ar: "الجيزة", en: "Giza" },
  { ar: "الدقهلية", en: "Dakahlia" },
  { ar: "المنوفية", en: "Monufia" },
];

const PrayerTimes = () => {
  const [pray, setPray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGov, setSelectedGov] = useState(governorates[0].en);

  const convertTo12HourFormat = (time24) => {
    const [hour, minute] = time24.split(":");
    let hr = parseInt(hour, 10);
    hr = hr % 12 || 12;
    return `${hr}:${minute} `;
  };

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
          `https://api.aladhan.com/v1/timingsByAddress/${formattedDate}?address=${selectedGov},Egypt&method=8`
        );
        const data = await response.json();

        const timings = data.data.timings;
        const prayerTimesArr = [
          {
            name: "Fajr",
            time: convertTo12HourFormat(timings.Fajr),
            desc: "Daily Prayer",
            afternoon: false,
          },
          {
            name: "Sunrise",
            time: convertTo12HourFormat(timings.Sunrise),
            desc: "Daily Prayer",
            afternoon: false,
          },
          {
            name: "Dhuhr",
            time: convertTo12HourFormat(timings.Dhuhr),
            desc: "Daily Prayer",
            afternoon: true,
          },
          {
            name: "Asr",
            time: convertTo12HourFormat(timings.Asr),
            desc: "Daily Prayer",
            afternoon: true,
          },
          {
            name: "Maghrib",
            time: convertTo12HourFormat(timings.Maghrib),
            desc: "Daily Prayer",
            afternoon: true,
          },
          {
            name: "Isha",
            time: convertTo12HourFormat(timings.Isha),
            desc: "Daily Prayer",
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
    <div id='prayer-times'>
      <section className="xl:w-2/3 lg:backdrop-blur-lg rounded-xl text-center py-16 px-8 block mx-auto" >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Prayer Times
        </h2>
        <div className="my-6">
          <select
            id="govSelect"
            value={selectedGov}
            onChange={(e) => setSelectedGov(e.target.value)}
            className="p-2 border border-gray-300 rounded-md bg-[#0EA584]"
          >
            {governorates.map((gov, index) => (
              <option key={index} value={gov.en}>
                {gov.ar} - {gov.en}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex justify-center items-center dark:text-gray-400 mt-2">
              <CiLocationOn className="mr-2 not-dark:text-black font-bold" />
              <span>{selectedGov}, Egypt</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl lg:grid-cols-3 gap-6 mt-8 mx-auto justify-items-center">
              {pray.map((prayer, index) => (
                <PrayCard
                  key={index}
                  time={prayer.time}
                  desc={prayer.desc}
                  afternoon={prayer.afternoon}
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
