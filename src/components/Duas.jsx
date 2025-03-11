import DuaCard from "./DuaCard";
import { FaBook, FaHands } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const quranicDuas = [
  {
    id: 1,
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    translation:
      "Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.",
    reference: {
      en: "Surah Al-Baqarah: 127",
      ar: "سورة البقرة: 127"
    }
  },
  {
    id: 2,
    arabic:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    translation:
      "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.",
    reference: {
      en: "Surah Ibrahim: 40",
      ar: "سورة إبراهيم: 40"
    }
  },
  {
    id: 3,
    arabic:
      "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    translation:
      "Our Lord, forgive me and my parents and the believers the Day the account is established.",
    reference: {
      en: "Surah Ibrahim: 41",
      ar: "سورة إبراهيم: 41"
    }
  },
  {
    id: 4,
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    translation:
      "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    reference: {
      en: "Surah Al-Baqarah: 201",
      ar: "سورة البقرة: 201"
    }
  },
  {
    id: 5,
    arabic:
      "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
    translation:
      "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
    reference: {
      en: "Surah Aal-E-Imran: 8",
      ar: "سورة آل عمران: 8"
    }
  },
  {
    id: 6,
    arabic:
      "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    translation:
      "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
    reference: {
      en: "Surah Al-A'raf: 23",
      ar: "سورة الأعراف: 23"
    }
  },
  {
    id: 7,
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    translation:
      "My Lord, expand for me my chest and ease for me my task and untie the knot from my tongue that they may understand my speech.",
    reference: {
      en: "Surah Ta-Ha: 25-28",
      ar: "سورة طه: ٢٥-٢٨"
    }
  },
  {
    id: 8,
    arabic:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    translation:
      "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
    reference: {
      en: "Surah Al-Furqan: 74",
      ar: "سورة الفرقان: 74"
    }
  },
  {
    id: 9,
    arabic:
      "رَبِّ زِدْنِي عِلْمًا",
    translation:
      "My Lord, increase me in knowledge.",
    reference: {
      en: "Surah Ta-Ha: 114",
      ar: "سورة طه: 114"
    }
  },
  {
    id: 10,
    arabic:
      "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    translation:
      "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.",
    reference: {
      en: "Surah Al-Baqarah: 127",
      ar: "سورة البقرة: 127"
    }
  },
  {
    id: 11,
    arabic:
      "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
    translation:
      "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].",
    reference: {
      en: "Surah Al-A'raf: 126",
      ar: "سورة الأعراف: 126"
    }
  },
  {
    id: 12,
    arabic:
      "رَبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ",
    translation:
      "Our Lord, remove from us the punishment; indeed, we are believers.",
    reference: {
      en: "Surah Ad-Dukhan: 12",
      ar: "سورة الدخان: 12"
    }
  },
  {
    id: 13,
    arabic:
      "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
    translation:
      "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.",
    reference: {
      en: "Surah Al-Mu’minun: 97-98",
      ar: "سورة المؤمنون: 97-98"
    }
  },
  {
    id: 14,
    arabic:
      "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ",
    translation:
      "My Lord, save me and my family from [the consequence of] what they do.",
    reference: {
      en: "Surah Ash-Shu'ara: 169",
      ar: "سورة الشعراء: 169"
    }
  },
  {
    id: 15,
    arabic:
      "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    translation:
      "My Lord, grant me [a child] from among the righteous.",
    reference: {
      en: "Surah As-Saffat: 100",
      ar: "سورة الصافات: 100"
    }
  }  
  
];

const propheticDuas = [
  {
    "id": 5,
    "arabic": "اللَّهُمَّ رَبَّ شَهْرِ رَمَضَانَ الَّذِي أَنْزَلْتَ فِيهِ الْقُرْآنَ، وَجَعَلْتَهُ بَيِّنَاتٍ مِنَ الْهُدَى وَالْفُرْقَانِ، أَعِنَّا عَلَى صِيَامِهِ وَقِيَامِهِ، وَتَقَبَّلْهُ مِنَّا.",
    "translation": "O Allah, Lord of the month of Ramadan, in which You revealed the Quran and made it guidance and clear proof for mankind, help us to fast and pray in it, and accept it from us.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 6,
    "arabic": "اللَّهُمَّ اجْعَلْنَا مِمَّنْ يَقُومُ رَمَضَانَ وَيَصُومُهُ إِيمَانًا وَاحْتِسَابًا.",
    "translation": "O Allah, make us among those who observe Ramadan in prayer and fasting with faith and seeking reward.",
    "reference": {
      "en": "Bukhari & Muslim",
      "ar": "الْبُخَارِيُّ وَمُسْلِمٌ"
    }
  },
  {
    "id": 7,
    "arabic": "اللَّهُمَّ اجْعَلْ شَهْرَ رَمَضَانَ شَهْرَ عِزٍّ لِلْإِسْلَامِ وَلِلْمُسْلِمِينَ.",
    "translation": "O Allah, make the month of Ramadan a month of honor for Islam and for the Muslims.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 8,
    "arabic": "اللَّهُمَّ اجْعَلْ صِيَامِي فِي رَمَضَانَ صِيَامَ الصَّائِمِينَ، وَقِيَامِي قِيَامَ الْقَائِمِينَ، اللَّهُمَّ نَبِّهْنِي فِيهِ عَنْ نَوْمَةِ الْغَافِلِينَ، وَاعْفُ عَنِّي وَارْحَمْنِي بِرَحْمَتِكَ يَا أَكْرَمَ الْأَكْرَمِينَ.",
    "translation": "O Allah, make my fasting in Ramadan the fasting of the true fasters, and my standing in prayer the standing of the truly devout. O Allah, awaken me from the heedlessness of the negligent, and forgive me and have mercy on me by Your mercy, O Most Generous.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 9,
    "arabic": "اللَّهُمَّ اجْعَلْنِي فِي رَمَضَانَ مِنَ الْمُسْتَغْفِرِينَ التَّائِبِينَ.",
    "translation": "O Allah, make me among those who seek forgiveness and repent in Ramadan.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 10,
    "arabic": "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ.",
    "translation": "O Allah, help me to remember You, thank You, and worship You properly.",
    "reference": {
      "en": "Abu Dawood",
      "ar": "أَبُو دَاوُد"
    }
  },
  {
    "id": 11,
    "arabic": "اللَّهُمَّ اجْعَلْ لِي نَصِيبًا مِنْ رَحْمَتِكَ وَعَفْوِكَ.",
    "translation": "O Allah, grant me a share of Your mercy and forgiveness.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 12,
    "arabic": "نَسْأَلُكَ يَا رَبِّ أَنْ تَرْزُقَنَا بِقَلْبٍ لَا يَأْنَسُ إِلَّا بِمُنَاجَاتِكَ، وَعَقْلٍ لَا يَهْتَدِي إِلَّا بِمَعْرِفَتِكَ، وَرُوحٍ لَا تَسْعَدُ إِلَّا فِي ذِكْرِكَ.",
    "translation": "O Lord, we ask You to bless us with a heart that finds solace only in Your remembrance, a mind that is guided only by Your knowledge, and a soul that is only happy in Your remembrance.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 13,
    "arabic": "يَا مُجِيبَ الدُّعَاءِ، وَيَا مُقِيلَ الْعَثَرَاتِ، وَقَاضِي الْحَاجَاتِ، اقْضِ حَاجَتِي، وَفَرِّجْ كُرْبَتِي، وَارْزُقْنِي مِنْ حَيْثُ لَا أَحْتَسِبُ.",
    "translation": "O Answerer of prayers, O Remover of difficulties, O Fulfiller of needs, fulfill my needs, relieve my distress, and provide for me from where I do not expect.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 14,
    "arabic": "سُبْحَانَ مَنْ قَسَّمَ الْأَرْزَاقَ وَلَمْ يَنْسَ أَحَدًا، اجْعَلْ يَدِي عُلْيَا بِالْعَطَاءِ، وَلَا تَجْعَلْ يَدِي سُفْلَى بِالِاسْتِعْطَاءِ.",
    "translation": "Glory be to the One who distributes sustenance and forgets no one. Make my hand the giving hand and not the begging one.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 15,
    "arabic": "اللَّهُمَّ عَلَيْكَ تَوَكَّلْتُ، فَارْزُقْنِي وَاكْفِنِي، وَبِكَ لُذْتُ فَنَجِّنِي مِمَّا يُؤْذِينِي، أَنْتَ حَسْبِي وَنِعْمَ الْوَكِيلُ.",
    "translation": "O Allah, I put my trust in You, so provide for me and suffice me. I seek refuge in You, so save me from what harms me. You are my sufficiency and the best disposer of affairs.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 16,
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَرْزُقَنِي رِزْقًا حَلَالًا وَاسِعًا طَيِّبًا.",
    "translation": "O Allah, I ask You to grant me lawful, abundant, and pure sustenance.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 17,
    "arabic": "اللَّهُمَّ بَارِكْ لِي فِي دِينِي، وَبَارِكْ لِي فِي مَالِي، وَبَارِكْ لِي فِي صِحَّتِي، وَلَا تَقْبِضْنِي إِلَّا وَأَنْتَ رَاضٍ عَنِّي.",
    "translation": "O Allah, bless me in my faith, bless me in my wealth, and bless me in my health. Do not take my soul except while You are pleased with me.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 18,
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَجْأَةِ الْخَيْرِ، وَأَعُوذُ بِكَ مِنْ فَجْأَةِ الشَّرِّ، اللَّهُمَّ صُبَّ لِيَ الْخَيْرَ صَبًّا صَبًّا، وَارْزُقْنِي حَلَالًا طَيِّبًا.",
    "translation": "O Allah, I ask You for sudden goodness, and I seek refuge in You from sudden evil. O Allah, pour goodness upon me abundantly and provide me with lawful and pure sustenance.",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    "id": 19,
    "arabic": "أَسْتَغْفِرُ اللَّهَ لِي وَلِوَالِدَيَّ، وَلِأَرْحَامِي، وَلِكُلِّ مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ.",
    "translation": "I seek forgiveness from Allah for myself, my parents, my relatives, and everyone who says ‘There is no god but Allah.’",
    "reference": {
      "en": "General Supplication",
      "ar": "دُعَاءٌ عَامٌّ"
    }
  },
  {
    id: 1,
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, good provision, and acceptable deeds.",
    reference: {
      en: "Ibn Majah",
      ar: "ابن ماجه"
    }
  },
  {
    id: 2,
    arabic:
      "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ",
    translation:
      "O Allah, make good our end in all matters, and save us from humiliation in this world and the punishment of the Hereafter.",
    reference: {
      en: "Ahmad",
      ar: "أحمد"
    }
  },
  {
    id: 3,
    arabic:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    translation:
      "O Allah, suffice me with what You have allowed instead of what You have forbidden, and make me independent of all others besides You.",
    reference: {
      en: "Tirmidhi",
      ar: "الترمذي"
    }
  },
];

export { quranicDuas, propheticDuas };

const Duas = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar' ? 'rtl' : 'ltr'
  const content = t('duas', { returnObjects: true })
  return (
    <section className="py-16 px-5 container mx-auto max-w-7xl" id='duas' dir={isArabic}>
      <h2 className="text-3xl font-bold text-center flex justify-center items-center gap-2">
        <span className="text-primary-dark dark:text-primary-light hidden md:block">
          <FaHands />
        </span>
        {content.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-[50px] max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
            <span className="text-primary-dark dark:text-primary-light">
              <FaBook />
            </span>{" "}
            {content.quranic}
          </h3>
          <div style={{direction: 'ltr'}} className="flex flex-col gap-6 items-center h-[540px] overflow-y-auto">
            {quranicDuas.map((dua) => (
              <DuaCard key={dua.id} {...dua} isQuran={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
            <span className="text-primary-dark dark:text-primary-light">
              <FaRegHeart />
            </span>{" "}
            {content.prophetic}
          </h3>
          <div style={{direction: 'ltr'}} className="h-[540px] flex flex-col gap-6 items-center overflow-y-auto">
            {propheticDuas.map((dua) => (
              <DuaCard key={dua.id} {...dua} isQuran={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duas;
