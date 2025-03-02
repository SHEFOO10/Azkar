import { FaBookOpen, FaRegStar } from "react-icons/fa";

export default function DuaCard({
  arabic,
  translation,
  reference,
  isQuran = false,
}) {
  return (
    <div className="dark:bg-card rounded-xl p-5 w-full max-w-md not-dark:shadow-lg shadow-gray-300 py-2">
      <p className="text-right text-lg font-semibold leading-relaxed mt-4">
        {arabic}
      </p>

      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{translation}</p>

      <div className="flex items-center mt-4 text-primary-dark dark:text-primary-light font-medium">
        {isQuran ? (
          <FaBookOpen className="mr-2" />
        ) : (
          <FaRegStar className="mr-2" />
        )}
        <span>{reference}</span>
      </div>
    </div>
  );
}
