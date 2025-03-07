import React, { useLayoutEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const navs = ["Prayer Times", "Azkar", "Duas", "Prayer Guide", "Calendar"];

const Navbar = () => {
  const [theme, setTheme] = useState("");
  const [isOpen, setISOpen] = useState(false);
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);
  const changeTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };
  return (
    <>
      <nav>
        <div className="main-nav flex items-center justify-around p-5">
          <div className="text-primary-dark dark:text-primary-light font-bold text-lg">
            IslamicPrayers
          </div>
          <ul className="gap-6 flex text-gray-700">
            {navs.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer hidden md:block text-[#4B5563] dark:text-gray-300 font-semibold"
              >
                {nav}
              </li>
            ))}
            <li
              onClick={() => {
                setISOpen(!isOpen);
              }}
            >
              <IoMenu className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300 block md:hidden" />
            </li>
            <li>
              <FiSearch className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" />
            </li>
            <li>
              <MdOutlineNightlight
                className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300"
                onClick={changeTheme}
              />
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="mobile-nav flex items-center  p-5 dark:bg-[#0F1521] bg-[#E2DDD8]  md:hidden">
            <ul className="gap-3 flex flex-col text-gray-700">
              {navs.map((nav, index) => (
                <li
                  key={index}
                  className="cursor-pointer  text-[#4B5563] dark:text-gray-300 font-semibold"
                >
                  {nav}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
