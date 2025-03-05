import { FaRegCircleCheck } from 'react-icons/fa6'
import './styles/prayer-guide.css'
import PrayerTutorial from './PrayerTutorial'


export default function PrayerGuideSection({
  title,
  about,
  children
}) {
  return (
    <section className='guide-section'>
      <header className='guide-header'>
        <FaRegCircleCheck />
        <h3 className='guide-title'>
          {title}
        </h3>
      </header>
      <main className='guide-main'>
        <p className='guide-about'>{about}</p>
        <PrayerTutorial>
          {children}
        </PrayerTutorial>
      </main>
    </section>
  )
}
