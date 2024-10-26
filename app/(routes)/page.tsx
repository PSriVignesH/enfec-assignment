import React from 'react'
import Hero from '../components/Hero'
import Explore from '../components/Explore'
import Carosuel from '../components/Carosuel/Carosuel'
import Features from '../components/Features'

const Home = () => {
  return (
    <div className='mt-[10px]'  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Hero />
      <Explore />
      <Carosuel />
      <Features/>
    </div>
  )
}

export default Home