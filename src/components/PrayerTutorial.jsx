import { FiInfo } from 'react-icons/fi'
import './styles/prayer-guide.css'



export default function PrayerTutorial({
  children
}) {
  return (
    <ul className='guide-tutorial'>
      <li className='keypoints tutorial-item'>
        <FiInfo />
        Key Points:
      </li>
      {children}
    </ul>
  )
}
