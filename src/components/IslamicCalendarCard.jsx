import { FaRegStar } from "react-icons/fa";

const IslamicCalendarCard = ({ title, description, date, highlight }) => {
  return (
    <div className="dark:bg-card not-dark:bg-gray-100 rounded-xl p-6 shadow-md w-full max-w-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaRegStar className="text-green-600 text-xl" />
          <h2 className="text-lg font-semibold not-dark:text-gray-900">{title}</h2>
        </div>
        <span className="text-green-400 font-medium">{date}</span>
      </div>
      <p className="not-dark:text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      <div className="bg-green-100 text-green-800 p-3 rounded-lg mt-3 text-sm">
        {highlight}
      </div>
    </div>
  );
};

export default IslamicCalendarCard;
