import "./styles/Navbar.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight, MdOutlineWbSunny } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const navs = [
  { name: "navbar.prayer_times", id: "prayer-times" },
  { name: "navbar.azkar", id: "daily-azkar" },
  { name: "navbar.duas", id: "duas" },
  { name: "navbar.prayer_guide", id: "prayer-guide" },
  { name: "navbar.calendar", id: "islamic-calendar" },
  { name: "navbar.Seerah_Quran", id: "videos" },
];

const Navbar = ({ changeTheme, theme }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-around p-5">
        <div className="flex items-center text-primary-dark dark:text-primary-light font-bold text-lg">
          <img width={64} height={64} src="/ITCLUB.png" /> {t("navbar.title")}
        </div>
        <ul className="gap-6 flex text-gray-700">
          {navs.map(({ name, id }, index) => (
            <li
              key={index}
              className="cursor-pointer hidden md:block text-[#4B5563] dark:text-gray-300 font-semibold"
            >
              <a href={`#${id}`}>{t(name)}</a>
            </li>
          ))}
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoMenu className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300 block md:hidden" />
          </li>
          {/* <li>
          <FiSearch className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" />
        </li> */}
          <li
            onClick={() =>
              changeTheme((e) => (e === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <MdOutlineNightlight className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" />
            ) : (
              <MdOutlineWbSunny className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" />
            )}
          </li>
        </ul>
      </nav>
      {/* mobile nav */}
      {isMenuOpen && (
        <ul
          className={`text-gray-700 px-[50px] py-5 block md:hidden bg-[#FAFAF9] dark:bg-[#1A202C] 
    rounded-lg shadow-lg transition-all 
    ${isMenuOpen ? "menu-enter" : "menu-exit"}`}
        >
          {navs.map(({ name, id }, index) => (
            <li
              key={index}
              className="cursor-pointer my-3 text-[#4B5563] dark:text-gray-300 font-semibold transition-all duration-300 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href={`#${id}`}>{t(name)}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
