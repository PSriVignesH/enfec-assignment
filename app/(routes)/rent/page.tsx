import Carosuel from '@/app/components/Carosuel/Carosuel'
import Explore from '@/app/components/Explore'
import Features from '@/app/components/Features'
import Hero from '@/app/components/Hero'
import React from 'react'

const RentPage = () => {
  return (
    <div className='mt-[10px]'  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Hero />
      <Carosuel />
      <Features/>
      <Explore />
    </div>
  )
}

export default RentPage