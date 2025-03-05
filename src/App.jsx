import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PrayerTimes from "./components/PrayerTimes";
import Duas from "./components/Duas";
import PrayerGuide from "./components/PrayerGuide.jsx";
import PrayerItem from "./components/PrayerItem.jsx";
import DailyAzkar from "./components/DailyAzkar";
import IslamicCalendar from "./components/IslamicCalendar.jsx";
import PrayerTutorial from "./components/PrayerTutorial.jsx";
import PrayerGuideContainer from "./components/PrayerGuideContainer.jsx";

function App() {
  return (
    <div style={{
      background: "url('/pattern.jpg') var(--bg-color)",
      backgroundBlendMode: "overlay",
    }}>
      <Navbar />
      <PrayerGuideContainer>
        <PrayerGuide title={'title'} about={'about'}>
          <PrayerItem>
            Hello 1
          </PrayerItem>
          <PrayerItem>
            Hello 2
          </PrayerItem>
          <PrayerItem>
            Hello 3
          </PrayerItem>
        </PrayerGuide>
      </PrayerGuideContainer>
      <Hero />
      <PrayerTimes />
      <DailyAzkar />
      <Duas />
      <IslamicCalendar />
    </div>
  );
}

export default App;
