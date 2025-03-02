import DuaCard from "./DuaCard";
import { FaBook, FaHands } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const quranicDuas = [
  {
    id: 1,
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    translation:
      "Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.",
    reference: "Surah Al-Baqarah: 127",
  },
  {
    id: 2,
    arabic:
      "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    translation:
      "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.",
    reference: "Surah Ibrahim: 40",
  },
  {
    id: 3,
    arabic:
      "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    translation:
      "Our Lord, forgive me and my parents and the believers the Day the account is established.",
    reference: "Surah Ibrahim: 41",
  },
];

const propheticDuas = [
  {
    id: 1,
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, good provision, and acceptable deeds.",
    reference: "Ibn Majah",
  },
  {
    id: 2,
    arabic:
      "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ",
    translation:
      "O Allah, make good our end in all matters, and save us from humiliation in this world and the punishment of the Hereafter.",
    reference: "Ahmad",
  },
  {
    id: 3,
    arabic:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    translation:
      "O Allah, suffice me with what You have allowed instead of what You have forbidden, and make me independent of all others besides You.",
    reference: "Tirmidhi",
  },
];

export { quranicDuas, propheticDuas };

const Duas = () => {
  return (
    <section className="py-16 px-5 bg-gray-50 container mx-auto rounded-3xl max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 text-center flex justify-center items-center gap-2">
        <span className="text-[#059669] hidden md:block">
          <FaHands />
        </span>
        Quranic & Prophetic Duas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-[50px] max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <span className="text-[#059669]">
              <FaBook />
            </span>{" "}
            Quranic Duas
          </h3>
          <div className="flex flex-col gap-4 items-center">
            {quranicDuas.map((dua) => (
              <DuaCard key={dua.id} {...dua} isQuran={true} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <span className="text-[#059669]">
              <CiHeart />
            </span>{" "}
            Prophetic Duas
          </h3>
          <div className="flex flex-col gap-4 items-center">
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
