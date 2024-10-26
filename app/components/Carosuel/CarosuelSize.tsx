import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardWithImage from "./CardWithImage"
import CardWithoutImage from "./CardWithoutImage"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 5,
        duration:60
      }}
      className="w-full"
    >
      <CarouselContent>
        <CardWithImage
          imageUrl="/assets/homes/home-1.avif"
          linkText="View Homes >"
          location="Atlanta,GA"
          type="single"
        />
        <div className="flex flex-col items-center h-full">
          <CardWithoutImage
            bgColor="grey"
            description="I just moved to the neighborhood 2 years ago and love it! It's a great mix of families, seniors and..."
            residentName="Trulia User"
            residentLocation="San Francisco"
          />
         <CardWithImage
          imageUrl="/assets/homes/home-1.avif"
          linkText="View Homes >"
            location="Atlanta,GA"
            type="double"
          /> 
        </div>
        <div className="flex flex-col items-center h-full">
        <CardWithImage
          imageUrl="/assets/homes/home-6.avif"
          linkText="View Homes >"
            location="Austin,TX"
            type="double"
          /> 
         <CardWithImage
          imageUrl="/assets/homes/home-5.avif"
          linkText="View Homes >"
            location="New York,GA"
            type="double"
          /> 
        </div>
         <CardWithImage
          imageUrl="/assets/homes/home-2.avif"
          linkText="View Homes >"
          location="Boston,MA"
          type="single"
        />
        <div className="flex flex-col items-center h-full">
         <CardWithImage
          imageUrl="/assets/homes/home-1.avif"
          linkText="View Homes >"
            location="Atlanta,GA"
            type="double"
          />
           <CardWithoutImage
            bgColor="blue"
            description="A good mix of young adults/good night life as well as families and family friendly activities.."
            residentName="Glenn Magna"
            residentLocation="Texas"
          />
          </div>
         <CardWithImage
          imageUrl="/assets/homes/home-3.avif"
          linkText="View Homes >"
          location="Phildephia,NC"
          type="single"
        />
         <div className="flex flex-col items-center h-full">
        <CardWithImage
          imageUrl="/assets/homes/home-6.avif"
          linkText="View Homes >"
            location="Austin,TX"
            type="double"
          /> 
         <CardWithImage
          imageUrl="/assets/homes/home-5.avif"
          linkText="View Homes >"
            location="New York,GA"
            type="double"
          /> 
          </div>
        <CardWithImage
          imageUrl="/assets/homes/home-1.avif"
          linkText="View Homes >"
          location="Atlanta,GA"
          type="single"
        />
         <div className="flex flex-col items-center h-full">
          <CardWithoutImage
            bgColor="grey"
            description="I just moved to the neighborhood 2 years ago and love it! It's a great mix of families, seniors and..."
            residentName="Trulia User"
            residentLocation="San Francisco"
          />
         <CardWithImage
          imageUrl="/assets/homes/home-1.avif"
          linkText="View Homes >"
            location="Atlanta,GA"
            type="double"
          /> 
        </div>
        <CardWithImage
          imageUrl="/assets/homes/home-4.avif"
          linkText="View Homes >"
          location="Atlanta,GA"
          type="single"
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
