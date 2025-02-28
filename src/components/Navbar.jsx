import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
const navs = ["Prayer Times", "Azkar", "Duas", "Prayer Guide", "Calendar"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white">
      <div className="text-[#059669] font-bold text-lg">IslamicPrayers</div>
      <ul className="hidden md:flex gap-6 text-gray-700">
        {navs.map((nav, index) => (
          <li
            key={index}
            className="cursor-pointer text-[#4B5563] font-semibold"
          >
            {nav}
          </li>
        ))}
        <li>
          <FiSearch className="text-xl cursor-pointer text-[#4B5563]" />
        </li>
        <li>
          <MdOutlineNightlight className="text-xl cursor-pointer text-[#4B5563]" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
