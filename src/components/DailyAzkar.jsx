import React from "react";
import DailyAzkarSection from "./DailyAzkarSection";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightlight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const morning_azkar = [
  {
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
    translation:
      "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
    repeat: 1,
    merit: "A comprehensive morning remembrance",
  },
  {
    arabic:
      "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلَامِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ.",
    translation:
      "We have entered the morning upon the natural way of Islam, the statement of sincerity, and the religion of our Prophet Muhammad (ﷺ).",
    repeat: 1,
    merit: "Affirming faith in the morning",
  },
  {
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ.",
    translation:
      "O Allah, I ask You for the good of this day: its victory, its light, its blessing, and its guidance.",
    repeat: 1,
    merit: "Seeking blessings for the day",
  },
];

const evening_azkar = [
  {
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",
    translation:
      "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final destination.",
    repeat: 1,
    merit: "A comprehensive evening remembrance",
  },
  {
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
    translation:
      "I seek refuge in Allah’s perfect words from the evil of what He has created.",
    repeat: 3,
    merit: "Protection from harms during the night",
  },
];

const DailyAzkar = () => {
  const { t, i18n } = useTranslation()
  const azkar = t('daily_azkar', { returnObjects: true })
  const isArabic = i18n.language === 'ar'
  return (
    <div className="min-h-screen py-10" id='daily-azkar'>
      <h1 className="text-3xl text-center font-semibold">
        {azkar.title}
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <DailyAzkarSection
          title={azkar.morning}
          icon={<IoSunnyOutline />}
          colorOne="#10B981"
          colorTwo="#0D9488"
          azkar={morning_azkar}
          isArabic={isArabic}
        />
        <DailyAzkarSection
          title={azkar.evening}
          icon={<MdOutlineNightlight />}
          colorOne="#6366F1"
          colorTwo="#9333EA"
          azkar={evening_azkar}
          isArabic={isArabic}
        />
      </div>
    </div>
  );
};

export default DailyAzkar;
