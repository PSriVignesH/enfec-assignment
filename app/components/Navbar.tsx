
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/assets/trulia-logo.jpeg'
import { Button } from '@/components/ui/button'
import { Rows3 } from 'lucide-react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-[60px] w-full p-3 fixed z-50 bg-white shadow-lg'>
      <div className='flex items-center justify-center gap-[15px]'>
        <Image src={Logo} height={30} width={100} alt='logo' className='mr-[20px]'/>
        <Link href="/" className='navLink' >Buy</Link>
        <Link href="/rent"className='navLink'>Rent</Link>
        <Link href="/sold" className='navLink'>Mortgage</Link>
      </div>
      <div className='flex items-center justify-center gap-[15px]'>
      <h2 className='navLink'>Saved Homes</h2>
      <h2 className='navLink'>Saved Searches</h2>
        <Button className='bg-transparent text-[#3b4144]  text-[16px] font-semibold hover:bg-gray-200 hover:text-[#3b4144]'>
          Sign up or Log in
        </Button> 
        <Rows3 className='cursor-pointer'  color='#007882'/>
      </div>
    </div>
  )
}

export default Navbar