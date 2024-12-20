import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarCard = ({ car, id, vehicleName }) => {
  return (
    <Link href={`/${vehicleName}/${id}`}>
      <div className="relative group bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full h-64">
        {/* Image */}
        <Image
          height={500}
          width={500}
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        {/* Name Overlay */}
        <h2 className="absolute bottom-2 left-4  text-center text-white  py-1 text-lg font-bold">
          {car.name}
        </h2>
        {/* Hover Details */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ul className="space-y-2 text-center">
            {car.features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                <feature.icon className="mr-2 text-blue-400" />
                {feature.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

const CarList = ({ cars, vehicleName }) => {
  return (
    <div className="bg-gray-100 min-h-screen md:px-40 pt-12 md:pt-24 px-4 py-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Fleet
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(({ id, car }) => (
          <CarCard key={id} id={id} car={car} vehicleName={vehicleName} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
