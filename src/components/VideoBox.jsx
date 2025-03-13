import React from "react";
import { TbClock } from "react-icons/tb";

const VideoBox = ({ title, duration, backgroundText, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="cursor-pointer relative w-80 h-48 bg-gray-700 text-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
    >
      <div className="flex items-center justify-center flex-grow dark:bg-[#364153] bg-[#DBFCE7] bg-opacity-40">
        <span className="text-4xl font-extrabold dark:text-white text-gray-600">
          {backgroundText}
        </span>
      </div>
      <div className="w-full p-4 dark:bg-[#1E2939] bg-white bg-opacity-80 text-[#10B981]">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm  flex items-center gap-2">
          <span>
            <TbClock />
          </span>
          <span>{duration}</span>
        </p>
      </div>
    </a>
  );
};

export default VideoBox;
