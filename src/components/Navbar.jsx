import React, { useLayoutEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const navs = [
  { name: "Prayer Times", id: 'prayer-times' },
  { name: "Azkar", id: 'daily-azkar' },
  { name: "Duas", id: 'duas' },
  { name: "Prayer Guide", id: 'prayer-guide' },
  { name: "Calendar", id: 'islamic-calendar' },
];

const Navbar = () => {
  const [theme, setTheme] = useState("")
  useLayoutEffect(() => {
    const html = document.documentElement
    html.classList.toggle(
      'dark',
      localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    )
  }, [theme])
  const changeTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
  }
  return (
    <nav className="flex items-center justify-around p-5">
      <div className="text-primary-dark dark:text-primary-light font-bold text-lg">IslamicPrayers</div>
      <ul className="gap-6 flex text-gray-700">
        {navs.map(({ name, id }, index) => (
          <li
            key={index}
            className="cursor-pointer hidden md:block text-[#4B5563] dark:text-gray-300 font-semibold"
          >
            <a
              href={`#${id}`}
            >
              {name}
            </a>
          </li>
        ))}
        <li>
          <IoMenu className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300 block md:hidden" />
        </li>
        <li>
          <FiSearch className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" />
        </li>
        <li>
          <MdOutlineNightlight className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" onClick={changeTheme} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
