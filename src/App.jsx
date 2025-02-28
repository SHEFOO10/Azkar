import AzkarContainer from "./components/AzkarContainer"
import PrayerGuide from "./components/PrayerGuide"
import PrayerItem from "./components/PrayerItem"
import Verse from "./components/Verse"
import VerseAzkar from "./components/VerseAzkar"
import VerseText from "./components/VerseText"

function App() {

  return (
    <>
      {/*
      <AzkarContainer isNight={false}>
        <VerseAzkar sura="Al-Fatiha" verse={1}>
          <VerseText>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </VerseText>
        </VerseAzkar>
        <Verse sura="Al-Fatiha" verse={1}>
          <VerseText>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </VerseText>
        </Verse>
      </AzkarContainer>
      */}
      <PrayerGuide title={'Prayer Guide'} about={'Perform ablution to purify yourself before prayer. This includes washing your face, arms, wiping your '}>
        <PrayerItem>
          Hellow
        </PrayerItem>
        <PrayerItem>
          2
        </PrayerItem>
      </PrayerGuide>
    </>
  )
}

export default App
