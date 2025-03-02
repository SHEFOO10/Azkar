import { FaBookOpen, FaRegStar } from "react-icons/fa";

export default function DuaCard({
  arabic,
  translation,
  reference,
  isQuran = false,
}) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-5 border border-gray-200 w-full max-w-md">
      <p className="text-right text-lg font-semibold text-gray-900 leading-relaxed">
        {arabic}
      </p>

      <p className="text-gray-600 text-sm mt-2">{translation}</p>

      <div className="flex items-center mt-4 text-[#059669] font-medium">
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
