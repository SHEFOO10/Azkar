import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroBox = ({ head, body, btm, href, isArabic }) => {
  return (
    <div className={`not-dark:shadow-lg shadow-gray-300 bg-card rounded-xl p-6 ${isArabic ? 'text-right' : 'text-left'} flex flex-col justify-between`}>
      <h3 className="text-xl font-semibold">{head}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{body}</p>
      <a
        href={href}
        className="text-primary-dark dark:text-primary-light font-medium mt-3 flex items-center gap-1"
      >
        <span>{btm}</span>
        <span>
          {
            isArabic
              ? <FaArrowLeft />
              : <FaArrowRight />
          }
        </span>
      </a>
    </div>
  );
};

export default HeroBox;
