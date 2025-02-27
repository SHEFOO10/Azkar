import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

import './styles/azkar.css'

export default function AzkarContainer({ children, isNight }: { children?: React.ReactNode, isNight: boolean }) {

  return (
    <section className="azkar-container">
      <header className={`azkar-header ${isNight ? 'azkar-night' : 'azkar-morning'}`}>
        {isNight ? <IoMoonOutline /> : <IoSunnyOutline />}
      </header>
      {children}
    </section>
  )
}
