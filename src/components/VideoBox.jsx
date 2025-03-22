import React from "react";
import { TbClock } from "react-icons/tb";

const VideoBox = ({ title, publishedAt, thumbnail, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer relative w-96 bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
    >
      <div className="w-full h-40">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full p-4 dark:bg-[#1E2939] bg-white bg-opacity-90 text-[#10B981] flex flex-col gap-2">
        <p className="text-sm flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <TbClock className="text-lg" />
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-5 pb-2">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h3>
      </div>
    </a>
  );
};

export default VideoBox;
