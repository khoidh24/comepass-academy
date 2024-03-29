import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navigation />
      <Hero />
      <Courses />
      <Footer />
    </div>
  )
}
