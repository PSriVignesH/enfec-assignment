import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'

interface Props{
  imageUrl: string,
  title: string,
  description: string,
  buttonText:string
}

const Feature:FC<Props>= ({buttonText,description,imageUrl,title}) => {
  return (
    <div className='mt-5 flex flex-col items-center justify-center  w-[300px]'>
      <Image src={imageUrl} height={128} width={128} loading='lazy' alt='feature'
         className='mb-5' />
      <h2 className='text-[24px] leading-[1.33] font-bold text-[#3b4144d8] mb-2'>
       {title}
      </h2>
      <p className='block text-center text-[16px] leading-[1.5] mb-3'>
        {description}
      </p>
      <Button className='w-[175px] bg-primaryTrulia-color text-white m-auto mb-20 hover:bg-transparent hover:border hover:border-solid hover:border-primaryTrulia-color hover:text-primaryTrulia-color
         rounded-lg  hover:shadow-md'>
         {buttonText}
      </Button>
    </div>
  )
}

export default Feature