import { useTranslation } from "react-i18next";
import IslamicCalendarCard from "./IslamicCalendarCard";

const IslamicCalendar = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  const content = t('islamic_calendar', { returnObjects: true })
  return (
    <div className="min-h-screen py-10 flex flex-col items-center" id='islamic-calendar' dir={isArabic ? "rtl" : "ltr"}>
      <h1 className="text-3xl font-semibold not-dark:text-gray-900">{content.title}</h1>
      <p className="dark:text-gray-400 text-gray-600 text-lg mb-6">
        {content.description}
      </p>
      <div className="space-y-4 w-full max-w-2xl p-5">
        {content.events.map((event, index) => (
          <IslamicCalendarCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            highlight={event.event}
          />
        ))}
      </div>
    </div>
  );
};

export default IslamicCalendar;
