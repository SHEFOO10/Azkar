import './styles/pray.css'
import { TbClock } from 'react-icons/tb'


export default function PrayCard({ children, time, desc, afternoon = true, isNotArabic = false }) {
  const textDir = isNotArabic ? 'ltr' : 'rtl'
  return (
    <section className="pray-card">
      <div className="pray-container">
        <div className="pray-details text-left">
          <span className="pray-title" dir={textDir}>{children}</span>
          <span className="pray-description" dir={textDir}>{desc}</span>
        </div>
        <TbClock />
      </div>
      <span className='pray-time'>
        {time} {afternoon ? 'PM' : 'AM'}
      </span>
    </section>
  )
}
