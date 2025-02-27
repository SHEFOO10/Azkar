import AzkarContainer from "./components/AzkarContainer"
import AzkarSection from "./components/AzkarSection"

function App() {

  return (
    <>
      <AzkarContainer isNight={true}>
        <AzkarSection>
          <span>Helo</span>
        </AzkarSection>
      </AzkarContainer>
    </>
  )
}

export default App
