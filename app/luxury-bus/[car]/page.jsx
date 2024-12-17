import React from 'react';
import { FaRupeeSign, FaShoppingBag, FaCarSide } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { AiOutlineControl } from "react-icons/ai";
import Image from 'next/image';
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import Link from 'next/link';
import {CarData} from '../../luxuryBusesData'
import SimilarCars from '../../components/SimilarCars';


function Page({params}) {
    const pageData = CarData.find((car) => car.id === params.car);

    const currentIndex = CarData.findIndex((car) => car.id === params.car);

    // Get the next cars based on available data
    const nextCarsCount = Math.min(3, CarData.length - 1);  // Show up to 3 cars, but not more than available
    const nextCars = [];
    
    for (let i = 1; i <= nextCarsCount; i++) {
      nextCars.push(CarData[(currentIndex + i) % CarData.length]);
    }
    
  return (
    <div>
      <div className="relative">
        <Image
          src={pageData.car.image}
          height={1000}
          width={1000}
          alt={pageData.id}
          className="object-cover origin-center w-full h-[600px]"
        />
        <div className="ml-40 mt-10">
          <div className="w-3/5">
            <h2 className="text-4xl font-semibold">{pageData.car.name}</h2>
            <div className="border-dashed hover:border-solid border-y-2 px-10 border-black py-4 my-4 flex items-center justify-between">
              {pageData.car.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="text-xl" /> {feature.description}
                </div>
              ))}
            </div>
            {pageData.details.map((detail, index) => (
              <div key={index} className="my-2">
                <h2 className="text-2xl font-semibold">{detail.title}</h2>
                <p className="py-1">{detail.description}</p>
              </div>
            ))}
            <div className="grid grid-cols-1 divide-y-2 border-y py-5">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Included</h2>
                <div className="grid grid-cols-1 space-y-2">
                  {pageData.included.slice(0, 3).map((item, index) => (
                    <div key={index}>
                      <SiTicktick className="inline mr-2" /> {item}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 space-y-2">
                  {pageData.included.slice(3).map((item, index) => (
                    <div key={index}>
                      <SiTicktick className="inline mr-2" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 divide-y-2 py-5">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Not Included</h2>
                <div>
                  {pageData.notIncluded.map((item, index) => (
                    <div key={index}>
                      <RxCrossCircled className="inline mr-2 font-semibold" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border border-black right-36 top-[470px]">
          <div className="bg-black/70 text-white px-20 py-10">
            <div className="flex items-center gap-2">
              <FaRupeeSign className="text-xl" />
              <h2 className="text-5xl">{pageData.pricing.perDay}</h2>
              <h2 className="text-lg">Per Day</h2>
            </div>
          </div>
          <div className="p-5">
            <div className="my-4">
              <h2 className="pb-2">Full Name</h2>
              <input type="text" className="border-b border-black" />
            </div>
            <div className="my-4">
              <h2 className="pb-2">Email Address</h2>
              <input type="email" className="border-b border-black" />
            </div>
            <div className="my-4">
              <h2 className="pb-2">Phone Number</h2>
              <input type="tel" className="border-b border-black" />
            </div>
            <div className="my-4">
              <h2 className="pb-2">Pickup Address</h2>
              <input type="text" className="border-b border-black" />
            </div>
            <div className="my-4">
              <h2 className="pb-2">Pickup Date</h2>
              <input type="date" className="border-b border-black" />
            </div>
            <div className="my-4">
              <h2 className="pb-2">Pickup Time</h2>
              <input type="time" className="border-b border-black" />
            </div>
            <Link href="/car/audi" className="my-4 bg-slate-400 flex justify-center p-4 text-xl font-semibold">
              Submit
            </Link>
          </div>
        </div>
      </div>
      <SimilarCars similarProducts={nextCars} vehicle={"luxury-bus"}/>
    </div>
  );
}

export default Page;
