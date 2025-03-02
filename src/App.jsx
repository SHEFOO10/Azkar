import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PrayerTimes from "./components/PrayerTimes";
import Duas from "./components/Duas";
import PrayerGuide from "./components/PrayerGuide.jsx";
import PrayerItem from "./components/PrayerItem.jsx";
import DailyAzkar from "./components/DailyAzkar";
import IslamicCalendar from "./components/IslamicCalendar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PrayerTimes />
      <DailyAzkar />
      <Duas />
      <IslamicCalendar />
    </>
  );
}

export default App;
