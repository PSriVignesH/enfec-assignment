import React from 'react'
import Feature from './Feature'

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-16'>
      <h1 className='text-[38px] font-bold leading-[1.05] mb-[20px] text-[#3b4144]'>
      See how Trulia can help
      </h1>
      <div className='flex items-center justify-center gap-[30px]'> 
        <Feature
          buttonText='Find a Home'
          description=' With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.'
          title='Buy a home'
          imageUrl='/assets/BuyAHome.svg'
        />
        <Feature
          buttonText='Find a rental'
          description="With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love."
          title='Rent a home'
          imageUrl='/assets/RentAHome.svg'
        />
        <Feature
          buttonText='Learn more'
          description="With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities."
          title='See neighborhoods'
          imageUrl='/assets/Neighborhoods.svg'
        />
      </div>
    </div>
  )
}

export default Features