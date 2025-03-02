import React from "react";
import HeroBox from "./HeroBox";

const Hero = () => {
  return (
    <section className="text-center py-16 px-5 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold">
        Begin Your Spiritual Journey
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">
        Discover daily prayers, Azkar, and spiritual guidance from the Quran and
        Sunnah
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-primary-dark dark:bg-primary-light text-white px-4 sm:px-6 py-2 rounded-lg sm:text-lg font-medium hover:bg-green-700 transition">
          Get Started
        </button>
        <button className="bg-[#D1FAE5] text-primary-dark px-4 sm:px-6 py-2 rounded-lg sm:text-lg font-medium hover:bg-green-100 transition">
          Prayer Times
        </button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <HeroBox
          head={"Daily Prayers"}
          body={"Find prayer times and guidance for your location"}
          btm={"Read More"}
        />
        <HeroBox
          head={"Morning Azkar"}
          body={"Start your day with blessed morning remembrance"}
          btm={"View Times"}
        />
        <HeroBox
          head={"Evening Azkar"}
          body={"End your day with peaceful evening remembrance"}
          btm={"Read More"}
        />
      </div>
    </section>
  );
};

export default Hero;
