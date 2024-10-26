
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import React, { FC } from 'react'

interface CardWithoutImageProps{
  residentName: string
  residentLocation: string
  description: string
  bgColor:string
}

const CardWithoutImage:FC<CardWithoutImageProps>= ({bgColor,description,residentLocation,residentName}) => {
  return (
    <CarouselItem  className="md:basis-1/2 lg:basis-1/5 cursor-pointer">
            <div className="p-1">
              <Card className="h-[195px]" style={{backgroundColor:bgColor}}>
                <CardContent className="flex flex-col items-start  p-2 h-full">
                   <div className='flex flex-col items-center justify-center mb-3'>
                     <h3 className='text-lg font-semibold text-white'>{residentName}</h3>
                     <p className='text-sm font-normal text-white ml-1 text-start'>{residentLocation}</p>
                   </div>
                   <h3 className='text-[18px] h-full w-[230px] text-white'>{description}</h3>
                </CardContent>
              </Card>
            </div>
    </CarouselItem>
  )
}

export default CardWithoutImage