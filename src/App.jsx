import AzkarContainer from "./components/AzkarContainer"
import Verse from "./components/Verse"
import VerseAzkar from "./components/VerseAzkar"
import VerseText from "./components/VerseText"

function App() {

  return (
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
  )
}

export default App
