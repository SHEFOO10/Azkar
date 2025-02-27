import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

import './styles/verse.css'

export default function AzkarContainer({ children, isNight }: { children?: React.ReactNode, isNight: boolean }) {

  return (
    <section className="azkar-container">
      <header className={`azkar-header ${isNight ? 'azkar-night' : 'azkar-morning'}`}>
        <span className='azkar-title'>
          {isNight ? <><IoMoonOutline />Evening Azkar</> : <><IoSunnyOutline />Morning Azkar</>}
        </span>
      </header>
      <main className='azkar-main'>
        {children}
      </main>
    </section>
  )
}
