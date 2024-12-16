"use client"
import React from 'react'
import { LiaCarSideSolid } from "react-icons/lia";
import { PiSmiley } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <div className='flex flex-col h-fit space-y-1 bg-[#5856D6] text-white text-center items-center justify-center py-16'>
        <h1 className='text-4xl font-[700]'>
            Why Choose Us
        </h1>
        <h2 className='text-base font-[500] text-opacity-70 pb-12 text-white'>
            Explore our first class limousine & car rental services

        </h2>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:mx-40 '>
            <div className='flex flex-col items-center justify-center text-center'>
                <LiaCarSideSolid className='text-6xl'/>
                <h1 className='text-xl font-[700] py-2'>
                Variety of Car Brands
                </h1>

                <p className='py-1'>
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <PiSmiley className='text-6xl'/>
                <h1 className='text-xl font-[700] py-2'>
                Variety of Car Brands
                </h1>

                <p className='py-1'>
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
                </p>
            </div>
            <div className='flex h-fit flex-col items-center justify-center text-center'>
                <IoIosHeartEmpty className='text-6xl'/>
                <h1 className='text-xl font-[700] py-2'>
                Variety of Car Brands
                </h1>

                <p className='py-1'>
                Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs