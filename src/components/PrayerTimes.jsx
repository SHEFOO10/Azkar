import React from "react";
import PrayCard from "./PrayCard"; // تأكد من أن الملف في نفس المسار
import { CiLocationOn } from "react-icons/ci";

const prayerTimes = [
  { name: "Fajr", time: "5:06", desc: "Daily Prayer", afternoon: false },
  { name: "Sunrise", time: "6:34", desc: "Daily Prayer", afternoon: false },
  { name: "Dhuhr", time: "12:12", desc: "Daily Prayer", afternoon: true },
  { name: "Asr", time: "3:24", desc: "Daily Prayer", afternoon: true },
  { name: "Maghrib", time: "5:50", desc: "Daily Prayer", afternoon: true },
  { name: "Isha", time: "7:08", desc: "Daily Prayer", afternoon: true },
];

const PrayerTimes = () => {
  return (
    <section className="text-center py-16 px-5 bg-white container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Prayer Times
      </h2>

      <div className="flex justify-center items-center text-gray-600 mt-2">
        <CiLocationOn className="mr-2 text-black font-bold" />
        <span>Alexandria, Egypt</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl lg:grid-cols-3 gap-6 mt-8 mx-auto justify-items-center">
        {prayerTimes.map((prayer, index) => (
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
    </section>
  );
};

export default PrayerTimes;
