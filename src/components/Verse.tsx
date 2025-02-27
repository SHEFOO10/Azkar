import './styles/verse.css'
import { GoBook } from 'react-icons/go'


type Props = {
  children: React.ReactNode,
  sura: string,
  verse: number
}

export default function Verse({ children, sura, verse }: Props) {
  return (
    <section className='verse-section'>
      {children}
      <div className='verse-row'>
        <span className='verse-item sura'>
          <GoBook />
          <span>
            {sura}:{verse}
          </span>
        </span>
      </div>
    </section>
  )
}
