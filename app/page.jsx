import MouseFollow from './components/MouseFollow'
import ContactCard from './scenes/ContactCard'
import InfoPanel from './scenes/InfoPanel'

export default function HomePage() {
  return (
    <div className='background'>
      <MouseFollow />
      <div className='main_container'>
        <div className='flex main_flex'>
          <ContactCard />
          <InfoPanel />
        </div>
      </div>
    </div>
  )
}
