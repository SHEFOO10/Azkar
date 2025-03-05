import IslamicCalendarCard from "./IslamicCalendarCard";

const Calendar = [
  {
    title: "Beginning of Ramadan",
    description: "The holy month of fasting begins",
    date: "1 Ramadan",
    highlight:
      "The blessed month of fasting, increased worship, and spiritual reflection",
  },
  {
    title: "Laylat al-Qadr",
    description: "The Night of Power",
    date: "27 Ramadan",
    highlight:
      "The night better than a thousand months, when the Quran was revealed",
  },
  {
    title: "Eid al-Fitr",
    description: "Festival of Breaking the Fast",
    date: "1 Shawwal",
    highlight: "Celebration marking the end of Ramadan and fasting",
  },
  {
    title: "Eid al-Adha",
    description: "Festival of Sacrifice",
    date: "10 Dhul-Hijjah",
    highlight:
      "Commemorating Prophet Ibrahim’s willingness to sacrifice his son",
  },
  {
    title: "Islamic New Year",
    description: "Beginning of the Hijri Calendar",
    date: "1 Muharram",
    highlight:
      "Marks the migration of Prophet Muhammad ﷺ from Makkah to Madinah",
  },
  {
    title: "Mawlid al-Nabi",
    description: "Birth of Prophet Muhammad ﷺ",
    date: "12 Rabi al-Awwal",
    highlight: "Commemorating the birth of the final Prophet ﷺ",
  },
];

const IslamicCalendar = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col items-center" id='islamic-calendar'>
      <h1 className="text-3xl font-semibold not-dark:text-gray-900">Islamic Calendar</h1>
      <p className="text-gray-600 text-lg mb-6">
        Important Islamic dates and events
      </p>
      <div className="space-y-4 w-full max-w-2xl p-5">
        {Calendar.map((event, index) => (
          <IslamicCalendarCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            highlight={event.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default IslamicCalendar;
