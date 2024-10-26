"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { CarFront, CarTaxiFront, Navigation, Search } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const HeroInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInputRef = useRef<HTMLInputElement>(null);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && modalInputRef.current) {
      modalInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative flex w-[530px]">
      <Input
        onClick={toggleModal}
        placeholder="Search for City, Neighborhood, Zip, County, School"
        className="p-7 h-12 placeholder:text-lg rounded-lg text-lg focus-visible:ring-primaryTrulia-color focus-visible:ring-offset-2 placeholder:line-clamp-1"
      />
      <Button
        className="absolute right-0 top-0 bottom-0 h-full w-[60px] ml-[-60px] bg-[#d93c23] hover:bg-[#9c1114] rounded-lg rounded-tl-none rounded-bl-none"
      >
        <Search size={30} />
      </Button>

      {isOpen && (
        <div
          ref={modalRef}
          className={`absolute top-1 left-0 ml-[-2px] bg-white border border-gray-300 min-h-[200px] w-[535px] 
             rounded-lg shadow-lg p-4 z-20 transform transition-transform duration-300 ${
               isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
             }`}
          style={{ marginTop: '-0.4rem' }}
        >
          <div className='flex items-center justify-center gap-3'>
          <Input
            ref={modalInputRef}
            placeholder="Search for City, Neighborhood, Zip, County, School"
            className="w-[450px] h-[60px] focus-visible:ring-primaryTrulia-color 
              focus-visible:ring-offset-2 placeholder:text-lg text-lg "
            />
            <div className='text-primaryTrulia-color cursor-pointer' onClick={()=>setIsOpen(false)}>
              Cancel
           </div>
          </div>
          <Separator className='mt-[6px]' />
          <div className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-slate-100'>
            <Navigation size={18} color='#007882'/>
            <p className='text-primaryTrulia-color text-base'>Current Location</p>
          </div>
          <Separator />
          <div className='flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-slate-100'>
            <CarFront size={18} color='#007882'/>
            <p className='text-primaryTrulia-color text-base'>Search by commute time</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroInput;
