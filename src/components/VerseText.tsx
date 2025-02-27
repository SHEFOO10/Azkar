
type Props = {
  children: React.ReactNode,
}
export default function VerseText({ children }: Props) {
  return (
    <p className={'verse-text'} dir='rtl'>
      {children}
    </p>
  )
}
