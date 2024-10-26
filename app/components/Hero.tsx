import { Button } from '@/components/ui/button'
import React from 'react'
import HeroLink from './HeroLink'
import HeroInput from './HeroInput'

const Hero = () => {
  return (
    <div className='w-full h-[592px] mt-20 bg-[url("/assets/hero.avif")] rounded-lg bg-cover bg-center flex flex-col items-center justify-center gap-[25px]'>
      <h1 className='font-bold text-[44px] text-white' style={{ textShadow: '0 0px 5px rgba(0, 0, 0, 1)',lineHeight:"1.10"}}>
        Discover a place <br/> you'll love to live
      </h1>
      <HeroLink />
      <HeroInput/>
    </div>
  )
}

export default Hero