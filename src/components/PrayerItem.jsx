import { FaRegCircleCheck } from 'react-icons/fa6'
import './styles/prayer-guide.css'


export default function PrayerItem({
  children
}) {
  return (
    <li className='tutorial-item'>
      <div className='tutorial-point'></div>
      <FaRegCircleCheck />
      {children}
    </li>
  )
}
