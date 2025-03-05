import PrayerGuideContainer from "./PrayerGuideContainer";
import PrayerGuideSection from "./PrayerGuideSection";
import PrayerItem from "./PrayerItem";

const prayerGuides = [
  {
    title: "Purification (Wudu)",
    about: "Before you pray, it’s important to be in a state of physical and spiritual purity. This means doing wudu, or ablution. It involves washing your hands, mouth, nose, face, arms, head, and feet in a specific order. It’s a refreshing way to prepare yourself for prayer.",
    steps: []
  },
  {
    title: "Intention (Niyyah)",
    about: "Think about your intention in your heart. You don’t need to say it out loud, but remind yourself that you are praying for Allah’s sake. This simple act of setting your intention can enhance your focus during the prayer.",
    steps: []
  },
  {
    title: "Choose a Clean Space",
    about: "Find a clean and quiet place to pray where you won’t be distracted. This could be a designated prayer area in your home, a quiet room, or even a corner of your office.",
    steps: []
  },
  {
    title: "Dress Modestly",
    about: "Wear clean and modest clothing. For men, this means covering from the navel to the knees. Women should wear loose-fitting clothes that cover their bodies.",
    steps: []
  },
  {
    title: "Step-by-Step Guide to Performing Solat",
    about: "",
    steps: [
      "Stand Facing the Qibla.",
      "Begin the Prayer with Takbir al-Ihram.",
      "Recite Surah Al-Fatiha.",
      "Recite Another Surah or Verses from the Quran.",
      "Perform the Ruku (Bowing).",
      "Stand Up Straight Again.",
      "Perform the Sujud (Prostration).",
      "Sit Between the Two Sujuds.",
      "Perform the Second Sujud.",
      "Complete the Rak’ah.",
      "Concluding the Prayer."
    ]
  },
  {
    title: "1. Stand Facing the Qibla",
    about: "",
    steps: [
      "Use compass or Qibla Finder Web App.",
      "Start positioning yourself to the Qibla."
    ]
  },
  {
    title: "2. Begin the Prayer with Takbir al-Ihram",
    about: "",
    steps: [
      "Raise your hands to your ears (or shoulders).",
      "Say the takbeer \"Allahu Akbar\"",
      "-- Meaning: (Allah is the Greatest)"
    ]
  },
  {
    title: "3. Recite Surah Al-Fatiha",
    about: "",
    steps: [
      "When in a standing position.",
      "Recite Surah Al-Fatiha (The opening chapter of the Quran.)"
    ]
  },
  {
    title: "4. Recite Another Surah or Verses from the Quran",
    about: "",
    steps: [
      "Recite another Surah or a few verses from the Quran."
    ]
  },
  {
    title: "5. Perform the Ruku (Bowing)",
    about: "",
    steps: [
      "Bend at the waist with your hands on your knees.",
      "Keeping your back straight.",
      "While in this position, say this 3 times \"Subhana Rabbiyal Adheemi Wa Bihamdihi\"",
      "-- Meaning: (Glory is to my Lord, the Most Great)"
    ]
  },
  {
    title: "6. Stand Up Straight Again",
    about: "",
    steps: [
      "Return to a standing position.",
      "Then say \"Sami’ Allahu liman Hamidah, Rabbana lakal hamd\"",
      "-- Meaning: (Allah hears the one who praises Him; Our Lord, to You belongs all praise)"
    ]
  },
  {
    title: "7. Perform the Sujud (Prostration)",
    about: "",
    steps: [
      "Go down into prostration.",
      'Touching your forehead, nose, palms, knees, and toes to the floor',
      '-- In this position, say "Subhana Rabbiyal A’la Wa Bihamdihi" 3 times',
      "-- Meaning (Glory is to my Lord, the Most High)"
    ]
  },
  {
    title: "8. Sit Between the Two Sujuds",
    about: "",
    steps: [
      {
        step: "Sit on your legs and say",
        description: [
          '"Rabbighfir li War Hamni Wajburni War Fa’ni War Zuqni Wa Ihdini Wa ‘Aafini Wa’fu ‘Anni"',
          'Meaning: (O Lord, forgive me, have mercy on me, support me, elevate me, provide for me, guide me, grant me health, and pardon me)'

        ]
      }
    ]
  },
  {
    title: "9. Perform the Second Sujud",
    about: "",
    steps: [
      "Go back down into prostration.",
      {
        step: 'Repeat "Subhana Rabbiyal A’la Wa Bihamdihi" 3 times',
        description: [
          "Meaning (Glory is to my Lord, the Most High)"
        ]
      }
    ]
  },
  {
    title: "10. Complete the Rak’ah",
    about: "",
    steps: [
      "Rise again to a standing position to complete the Rak’ah",
      'If you’re praying a prayer with more than one Rak’ah.',
      "Repeat 3-9 steps for each additional Rak’ah."
    ]
  },
  {
    title: "11. Concluding the Prayer",
    about: "",
    steps: [
      "The required number of Rak’ahs.",
      {
        step: "Sit for the Tashahhud (testimony) and recite:",
        description: [
          "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu ‘alayka ayyuhan-nabi, wa rahmatullahi wa barakatuh. As-salamu ‘alayna wa ‘ala ibadillahis-salihin. Ashhadu an la ilaha illa Allah, wa ashhadu anna Muhammadur Rasoolullah.",
          "Meaning: (All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity except Allah, and I bear witness that Muhammad is the Messenger of Allah.)",
        ]
      },
      {
        step:
          "To conclude your prayer, turn your head to the right and then to the left, saying this in each direction",
        description: [
          "\"As-salamu ‘alaykum wa rahmatullah\"",
          "Meaning: (Peace and mercy of Allah be upon you)"
        ]
      }
    ]
  }
]



export default function PrayerGuide() {
  return (
    <PrayerGuideContainer>
      <PrayerGuideSection>
        <PrayerItem>

        </PrayerItem>
      </PrayerGuideSection>
    </PrayerGuideContainer>
  )
}
