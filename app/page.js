"use client";
import React, { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import WhyChooseUs from "../components/WhyChooseUs";
import CarsCarousel from "../components/CarsCarousel";
import WelcomeSection from "../components/WelcomeSection";
import Image from "next/image";
import CarList from "@/components/CarList";

import { CarData } from "@/app/CarData";
import { MiniBusesData } from "@/app/MiniBusesData";
import { LuxuryBusesData } from "@/app/luxuryBusesData";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";

import CarListHome from "@/components/CarListHome";

const images = [
  "/carousel/img1.jpg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
];
function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const router = useRouter();
  return (
    <div>
      <div className="relative w-full h-screen">
        {/* <Image
        src="/bgimage.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className=""
      /> */}

        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={index === currentIndex}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className=" mt-20 absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
          <h1 className="text-6xl text-start font-bold mr-auto md:ml-40 mb-4 px-4">
            Trusted & Affordable Car
            <br></br>Rental in Kolhapur
          </h1>

          {/* <h2 className="text-base font-[500] text-gray-300">
            From as low as 10 per day with limited time offer
          </h2> */}

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 px-4 md:px-40 items-center justify-center w-full md:space-x-2 mb-20">
            {/* <select
              className="px-12 w-full py-2 appearance-none h-fit rounded text-gray-500 focus:outline-none focus:ring-0"
              // value="Cars"
            >
              <option>All Cars </option>
              <option>Audi</option>
              <option>BMW</option>
            </select> */}

            <Select
              classNameclassName="px-12 w-full py-2 appearance-none bg-white h-fit rounded  "
              onValueChange={(value) => {
                router.push(`/cars`);
              }}
            >
              <SelectTrigger className="w-full bg-white text-gray-500  focus:outline-none focus:ring-0">
                <SelectValue placeholder="Cars" />
              </SelectTrigger>
              <SelectContent className="text-gray-500  focus:outline-none focus:ring-0">
                {CarData.map((car) => (
                  <Link href={`/cars`} key={car.car.name}>
                    <SelectItem value={car.id} key={car.car.name} className="">
                      {car.car.name}
                    </SelectItem>
                  </Link>
                ))}
              </SelectContent>
            </Select>

            <Select
              classNameclassName="px-12 w-full py-2 appearance-none bg-white h-fit rounded  "
              onValueChange={(value) => {
                router.push(`/luxury-bus`);
              }}
            >
              <SelectTrigger className="w-full bg-white text-gray-500  focus:outline-none focus:ring-0">
                <SelectValue placeholder="Luxury Buses" />
              </SelectTrigger>
              <SelectContent className="text-gray-500  focus:outline-none focus:ring-0">
                {LuxuryBusesData.map((car) => (
                  <SelectItem value={car.id} key={car.car.name} className="">
                    {car.car.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              classNameclassName="px-12 w-full py-2 appearance-none bg-white h-fit rounded  "
              onValueChange={(value) => {
                router.push(`/mini-bus`);
              }}
            >
              <SelectTrigger className="w-full bg-white text-gray-500  focus:outline-none focus:ring-0">
                <SelectValue placeholder="Mini Buses" />
              </SelectTrigger>
              <SelectContent className="text-gray-500  focus:outline-none focus:ring-0">
                {MiniBusesData.map((car) => (
                  <SelectItem value={car.id} key={car.car.name} className="">
                    {car.car.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* 
            <button className="px-12 w-full py-2 bg-[#4BC1B3] text-white rounded hover:bg-[#03a39c] transition duration-300">
              Search
            </button> */}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-100">
        <CarListHome cars={CarData} vehicleName="cars" />

        <CarListHome cars={LuxuryBusesData} vehicleName="luxury-bus" />

        <CarListHome cars={MiniBusesData} vehicleName="mini-bus" />
      </div>
      <WelcomeSection />
      <WhyChooseUs />
    </div>
  );
}

export default Page;
