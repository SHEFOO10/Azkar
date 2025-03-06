import { FiInfo } from 'react-icons/fi'
import './styles/prayer-guide.css'
import { useTranslation } from 'react-i18next'



export default function PrayerTutorial({
  children
}) {
  const { t } = useTranslation()
  return (
    <ul className='guide-tutorial'>
      <li className='keypoints tutorial-item'>
        <FiInfo />
        {t('prayer_guides.key_points')}:
      </li>
      {children}
    </ul>
  )
}
