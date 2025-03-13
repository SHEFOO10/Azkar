import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PrayerTimes from "./components/PrayerTimes";
import Duas from "./components/Duas";
import PrayerGuide from "./components/PrayerGuide.jsx";
import DailyAzkar from "./components/DailyAzkar";
import IslamicCalendar from "./components/IslamicCalendar.jsx";
import { useEffect, useLayoutEffect, useState } from "react";
import Videos from "./components/Videos";

function App() {
  const [theme, setTheme] = useState("dark");

  useLayoutEffect(() => {
    const html = document.documentElement;
    const matches = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.classList.toggle(
      "dark",
      (theme === "dark" && localStorage.theme === "dark") ||
        (!("theme" in localStorage) && matches)
    );
    localStorage.theme = matches ? "dark" : "light";
  }, [theme]);

  return (
    <div
      style={{
        background: "url('/pattern.jpg') var(--bg-color)",
        backgroundBlendMode: theme === "dark" ? "multiply" : "overlay",
      }}
    >
      <Navbar changeTheme={setTheme} />
      <Hero />
      <PrayerTimes />
      <DailyAzkar />
      <Duas />
      <PrayerGuide />
      <IslamicCalendar />
      <Videos />
    </div>
  );
}

export default App;
