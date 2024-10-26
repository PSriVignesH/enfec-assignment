
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import React, { FC } from 'react'

interface CardWithImageProps{
  imageUrl: string
  location: string
  linkText: string
  type:string
}

const CardWithImage:FC<CardWithImageProps>= ({imageUrl,linkText,location,type}) => {
  return (
    <CarouselItem  className="md:basis-1/2 lg:basis-1/5 cursor-pointer">
            <div className="p-1">
              <Card className={`${type === "single" ? "h-[395px]": "h-[195px]"} bg-cover bg-center`}  style={{ backgroundImage: `url(${imageUrl})`}}>
                <CardContent className="flex flex-col items-start justify-between p-5 h-full">
            <span className="text-xl font-bold text-white">{location}</span>
            <div className="text-md font-semibold bg-slate-100 text-black leading-[1.5] px-[6] 
             py-[10px] rounded-lg">
              {linkText}
            </div>
                </CardContent>
              </Card>
            </div>
    </CarouselItem>
  )
}

export default CardWithImage