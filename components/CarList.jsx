import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarCard = ({ car, id, vehicleName }) => {
  return (
    // <Link href={`/${vehicleName}/${id}`}>
      <div className="bg-white shadow-lg rounded-md overflow-hidden w-full transform transition-transform duration-300 hover:-translate-y-2">
        {/* Image */}
        <div className="relative w-full h-64">
          <Image
            height={500}
            width={500}
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Details Section */}
        <div className="bg-gray-100 px-4 py-4">
          <h2 className="text-lg font-bold text-gray-800">{car.name}</h2>
          <ul className="space-y-1 mt-2">
            <div className="grid grid-cols-2 mt-2">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <feature.icon className="mr-2 text-[#04DBC0]" />
                  <span>{feature.description}</span>
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
        {cars.map(({ id, car }) => (
          <CarCard key={id} id={id} car={car} vehicleName={vehicleName} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
