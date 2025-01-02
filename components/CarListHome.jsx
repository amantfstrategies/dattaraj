import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCar } from "react-icons/fa";
const CarCard = ({ car, id, vehicleName, limit }) => {
  return (
    // <Link href={`/${vehicleName}/${id}`}>
      <div className="bg-white shadow-lg rounded-md overflow-hidden w-full transform transition-transform duration-300 relative group">
        {/* Image */}
        <div className="relative w-full p-12">
          <Image
            height={500}
            width={500}
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Details Section */}
        <div className=" flex flex-col items-center justify-start absolute z-40 top-[75%] w-full group-hover:top-0 transition-all duration-1000 overflow-hidden">

          <div className=" items-center  py-2 bg-[#4BC1B3] backdrop-blur-md w-full p-4 h-16">
            <h2 className="text-lg font-bold text-gray-800 ">{car.name}</h2>
            <p className=" text-black">{limit}</p>
          </div>
          
          <ul className="space-y-1  w-full px-4 bg-zinc-900 text-white  h-64">
            <div className="flex flex-col w-full justify-start">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between w-full py-2">
                  {/* <feature.icon className="mr-2 text-[#4BC1B3]" /> */}
                  <span className="flex flex-row justify-center items-center">
                  <FaCar className="font-[700] text-xl text-[#4BC1B3]"/>
                  <h2 className="px-2">{feature?.name}</h2>
                  </span>
                  

                  <span><span className="px-1 font-[700]">₹</span>{feature?.value}</span>
                </div>
              ))}
            </div>
          </ul>


        </div>
      </div>
  );
};

const CarList = ({ cars, vehicleName }) => {
  return (
    <div className="bg-gray-100 h-fit md:px-40   px-4 py-4">
      <h1 className="text-3xl font-bold text-start text-gray-800 mb-6">
        Our {vehicleName.charAt(0).toUpperCase() + vehicleName.slice(1)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(({ id, car, limit }) => (
          <CarCard key={id} id={id} car={car} vehicleName={vehicleName} limit={limit} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
