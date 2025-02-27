import { HiArrowPath } from 'react-icons/hi2'
import './styles/verse.css'
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md'


type Props = {
  children: React.ReactNode,
  repeat?: number,
  stared?: boolean,
  hint?: React.ReactNode
}

export default function VerseAzkar({ children, repeat = 1, stared = false, hint }: Props) {
  return (
    <section className='verse-section'>
      {children}
      <div className='verse-row'>
        <span className='verse-item repeat'>
          <HiArrowPath />
          <span>
            Repeat {repeat} {repeat > 1 ? "times" : 'time'}
          </span>
        </span>
        <span className='verse-item merit'>
          {stared ? <MdOutlineStar /> : <MdOutlineStarOutline />}
          Merit
        </span>
      </div>
      <div className='verse-hint'>
        {hint}
      </div>
    </section>
  )
}
