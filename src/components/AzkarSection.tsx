import './styles/azkar.css'


export default function AzkarSection({ children }: { children: React.ReactNode }) {
  return (
    <section className='azkar-section'>
      {children}
    </section>
  )
}
