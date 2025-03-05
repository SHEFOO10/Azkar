import { FaRegCircleCheck } from 'react-icons/fa6'
import './styles/prayer-guide.css'

export default function PrayerItem({
  children,
  step
}) {
  return (
    <li className={`tutorial-item ${!step ? '' : "item-points"}`}>
      {
        !step
          ?
          <>
            <FaRegCircleCheck />
            {children}
          </>
          : <>
            <div className='item-head'>
              <FaRegCircleCheck />
              {step.step}
            </div>
            <div className='item-sub'>
              {step.description
                .map((e, i, arr) => <div key={i}>
                  <p className='item-desc'>{e}</p>
                  {(i !== arr.length - 1) && <br />}
                </div>)}
            </div>
          </>
      }
    </li>
  )
}
