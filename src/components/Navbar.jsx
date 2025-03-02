import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const navs = ["Prayer Times", "Azkar", "Duas", "Prayer Guide", "Calendar"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white">
      <div className="text-[#059669] font-bold text-lg">IslamicPrayers</div>
      <ul className=" gap-6 flex text-gray-700">
        {navs.map((nav, index) => (
          <li
            key={index}
            className="cursor-pointer hidden md:block text-[#4B5563] font-semibold"
          >
            {nav}
          </li>
        ))}
        <li>
          <IoMenu className="text-xl cursor-pointer text-[#4B5563] block md:hidden" />
        </li>
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
