import Carosuel from '@/app/components/Carosuel/Carosuel'
import Explore from '@/app/components/Explore'
import Features from '@/app/components/Features'
import Hero from '@/app/components/Hero'
import React from 'react'

const SoldPage = () => {
  return (
    <div className='mt-[10px]'  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Hero />
      <Features/>
      <Explore />
      <Carosuel />
    </div>
  )
}

export default SoldPage