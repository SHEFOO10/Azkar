import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRepeat } from "react-icons/bs";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const DailyAzkarSection = ({
  title,
  icon,
  colorOne,
  colorTwo,
  azkar: _azkar,
}) => {
  const { t, i18n } = useTranslation();
  const content = t("daily_azkar", { returnObjects: true });
  const isArabic = i18n.language === "ar";
  const [azkar, setAzkar] = useState(_azkar);

  const handleRepeation = (i) => {
    const zikr = azkar[i];
    if (zikr.repeat === 1) {
      setAzkar([...azkar.slice(0, i), ...azkar.slice(i + 1)]);
    } else {
      setAzkar([
        ...azkar.slice(0, i),
        {
          ...zikr,
          repeat: zikr.repeat - 1,
        },
        ...azkar.slice(i + 1),
      ]);
    }
  };
  return (
    <div
      className="w-full max-w-md h-fit dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className="flex items-center justify-between px-4 py-3 text-white"
        style={{
          background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
        }}
      >
        <div className="flex gap-2 items-center">
          <span className="text-xl mr-2">{icon}</span>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <button className="cursor-pointer" onClick={() => setAzkar(_azkar)}>
          <FaArrowRotateRight />
        </button>
      </div>
      {azkar.length === 0 ? (
        <p className="text-center text-lg font-medium dark:text-gray-400 p-4 flex items-center justify-center gap-2">
          <span>تَقَبَّلَ اللَّهُ</span>
          <span className={`text-primary-dark dark:text-primary-light`}>
            <FaRegCheckCircle />
          </span>
        </p>
      ) : (
        <div
          className={`flex flex-col ${azkar.length === 0 ? "" : "p-4"} gap-4`}
        >
          {azkar.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer dark:bg-gray-700 dark:text-white p-4 rounded-xl shadow-sm transition hover:scale-102"
              onClick={() => handleRepeation(index)}
            >
              <h1 className="text-right text-lg font-semibold mb-2">
                {item.arabic}
              </h1>
              <p className="text-sm dark:text-gray-400 mb-3" dir={"ltr"}>
                {item.translation}
              </p>

              <div className="flex justify-between items-center text-sm font-medium">
                <div className="text-primary-dark dark:text-primary-light flex items-center gap-1">
                  <BsArrowRepeat />
                  {content.repeat} {item.repeat}{" "}
                  {item.repeat > 1 ? content.times : content.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyAzkarSection;
