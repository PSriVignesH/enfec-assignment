"use client"
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const HeroLink = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div>
      <div className="relative bg-[rgba(59,65,68,0.6)] backdrop-blur-md rounded-lg shadow-lg h-[45px] 
       w-[270px] flex items-center justify-center ">
        <Button onClick={() => router.push("/")} className={`heroLink hover:bg-white  hover:text-primaryTrulia-color transition duration-100 ease-in ${pathname === "/" ? "bg-white text-primaryTrulia-color font-bold text-lg" : "bg-transparent font-normal  text-lg"}`}>
          Buy
        </Button>
        <Button onClick={() => router.push("/rent")} className={`heroLink hover:bg-white  hover:text-primaryTrulia-color transition duration-100 ease-in ${pathname === "/rent" ? "bg-white text-primaryTrulia-color font-bold text-lg" : "bg-transparent font-normal  text-lg"}`}>
          Rent
        </Button>
        <Button onClick={() => router.push("/sold")} className={`heroLink hover:bg-white  hover:text-primaryTrulia-color transition duration-100 ease-in ${pathname === "/sold" ? "bg-white text-primaryTrulia-color font-bold text-lg" : "bg-transparent font-normal  text-lg"}`}>
          Sold
        </Button>
      </div>
      </div>
  )
}

export default HeroLink