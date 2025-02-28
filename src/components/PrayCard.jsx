import './styles/pray.css'
import { TbClock } from 'react-icons/tb'


export default function PrayCard({ children, time, desc, afternoon = true }) {
  return (
    <section className='pray-card'>
      <div className='pray-container'>
        <div className='pray-details'>
          <span className='pray-title'>
            {children}
          </span>
          <span className='pray-description'>
            {desc}
          </span>
        </div>
        <TbClock />
      </div>
      <span className='pray-time'>
        {time} {afternoon ? 'PM' : 'AM'}
      </span>
    </section>
  )
}
