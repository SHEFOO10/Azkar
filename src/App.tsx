import AzkarContainer from "./components/AzkarContainer"
import Verse from "./components/Verse"
import VerseAzkar from "./components/VerseAzkar"
import VerseText from "./components/VerseText"

function App() {

  return (
    <>
      <AzkarContainer isNight={true}>
        <VerseAzkar>
          <VerseText>اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْك</VerseText>
        </VerseAzkar>
        <VerseAzkar
          hint={'Allah will free a quarter of you from the Fire'}
        >
          <VerseText>اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ</VerseText>
        </VerseAzkar>
      </AzkarContainer>
      <Verse sura="Ibrahim" verse={2}>
        <VerseText>اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ</VerseText>
      </Verse>
    </>
  )
}

export default App
