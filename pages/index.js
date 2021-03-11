import Hero from '../sections/home/Hero'
import Projects from '../sections/home/Projects'
import Community from '../sections/home/Community'
import Presentation from '../sections/home/Presentation'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='relative' id='base-offset'>
        <img
          src='/static/logo.svg'
          alt='Logo EuErik.dev'
          className='sticky w-12 mb-10 top-4 left-4'
        />
        <Presentation />
        <Projects />
        <Community />
      </div>
    </>
  )
}
