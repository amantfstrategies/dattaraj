"use client";
import * as React from "react";
// import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Image from "next/image";

const CarsCarousel = () => {
  const cars = [
    { name: "tata indica", link: "", img: "./cars/car1.png" },
    { name: "tata indica1", link: "", img: "./cars/car1.png" },
    { name: "tata indica3", link: "", img: "./cars/car1.png" },
    { name: "tata indica4", link: "", img: "./cars/car1.png" },
    { name: "tata indica5", link: "", img: "./cars/car1.png" },
  ];

  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )

  const [activeIndex, setActiveIndex] = React.useState(1);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {cars.map((car, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="shadow-none border-none">
                  <CardContent className="flex flex-col shadow-none border-none aspect-square items-center justify-center p-6">
                    <Image
                      src={car.img}
                      alt={car.name}
                      layout="responsive"
                      width={500}
                      height={300}
                      className="w-full h-fit"
                    />
                    <span className="text-3xl font-semibold">{car.name}</span>
                    <button className="my-8 py-2 px-8 rounded-sm font-[300] text-[#04DBC0] bg-black hover:font-[400] hover:bg-[#2c2b2b]">
                      View Car
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="shadow-none border-none" />
        <CarouselNext className="shadow-none border-none" />
      </Carousel>
      {/* <Carousel
      opts={{ loop: true }}
      // plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      //  opts={{ align: "start" }}
        className="w-fit max-w-full">
        <CarouselContent>
          
          {cars.map((car, index) => (
            <CarouselItem
              key={index}
              className={`w-full  flex-shrink-0 transition-transform duration-500 ease-in-out ${
                index === activeIndex ? "scale-105 z-10" : "scale-95 opacity-80"
              }`}
            >
              <div className="flex w-full items-center justify-center p-4">
                <Card className="shadow-none w-full border-none p-4">
                  <CardContent className=" flex aspect-square items-center justify-center p-6 flex-col ">
                    <img src={car.img} className="w-fit h-fit " alt={car.name}></img>
                    <span className="text-3xl font-semibold">{car.name}</span>
                    <button className="bg-blue-300 py-2 px-4 rounded-sm font-[500] my-4 hover:bg-blue-200">
                      View Car
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      <CarouselNext />


        <CarouselPrevious handlePrevious={handlePrevious}  className=" border-none shadow-none "/>
        <CarouselNext handleNext={handleNext}  className=" border-none shadow-none  mr-auto z-50 "/>

        
      </Carousel> */}
    </div>
  );
};

export default CarsCarousel;
