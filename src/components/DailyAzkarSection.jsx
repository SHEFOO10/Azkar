import { useTranslation } from "react-i18next";
import { BsArrowRepeat } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

const DailyAzkarSection = ({ title, icon, colorOne, colorTwo, azkar }) => {
  const { t, i18n } = useTranslation()
  const content = t('daily_azkar', { returnObjects: true })
  const isArabic = i18n.language === 'ar'
  return (
    <div className="w-full max-w-md dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden" dir={isArabic ? 'rtl' : "ltr"}>
      <div
        className="flex items-center px-4 py-3 text-white gap-2"
        style={{
          background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
        }}
      >
        <span className="text-xl mr-2">{icon}</span>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      <div className="p-4 space-y-4">
        {azkar.map((item, index) => (
          <div key={index} className="dark:bg-gray-700 dark:text-white p-4 rounded-xl shadow-sm">
            <h1 className="text-right text-lg font-semibold mb-2">
              {item.arabic}
            </h1>
            <p className="text-sm dark:text-gray-400 mb-3" dir={'ltr'}>{item.translation}</p>

            <div className="flex justify-between items-center text-sm font-medium">
              <div className="text-primary-dark dark:text-primary-light flex items-center gap-1">
                <BsArrowRepeat />
                {content.repeat} {item.repeat} {item.repeat > 1 ? content.times : content.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyAzkarSection;
