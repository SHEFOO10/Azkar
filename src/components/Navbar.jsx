import { FiSearch } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const navs = [
  { name: "navbar.prayer_times", id: 'prayer-times' },
  { name: "navbar.azkar", id: 'daily-azkar' },
  { name: "navbar.duas", id: 'duas' },
  { name: "navbar.prayer_guide", id: 'prayer-guide' },
  { name: "navbar.calendar", id: 'islamic-calendar' },
];

const Navbar = ({ changeTheme }) => {
  const { t } = useTranslation()
  return (
    <nav className="flex items-center justify-around p-5">
      <div className="text-primary-dark dark:text-primary-light font-bold text-lg">{t('navbar.title')}</div>
      <ul className="gap-6 flex text-gray-700">
        {navs.map(({ name, id }, index) => (
          <li
            key={index}
            className="cursor-pointer hidden md:block text-[#4B5563] dark:text-gray-300 font-semibold"
          >
            <a
              href={`#${id}`}
            >
              {t(name)}
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
          <MdOutlineNightlight className="text-xl cursor-pointer text-[#4B5563] dark:text-gray-300" onClick={() => changeTheme(e => e === 'dark' ? 'light' : 'dark')} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
