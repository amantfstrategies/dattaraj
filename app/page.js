import React from "react";
import { SlArrowDown } from "react-icons/sl";
import WhyChooseUs from "./components/WhyChooseUs";
import CarsCarousel from "./components/CarsCarousel";


function Page() {
  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('./bgimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className=" mt-20 absolute inset-0 flex flex-col justify-center items-center text-center text-white space-y-4">
          <h1 className="text-6xl font-bold">Find Best Car & Limousine</h1>

          <h2 className="text-base font-[500] text-gray-300">
            From as low as 10 per day with limited time offer
          </h2>

          <div className="flex px-40 items-center justify-center w-full space-x-2">
            <select
              className="px-12 w-full py-2 appearance-none h-fit rounded text-gray-500 focus:outline-none focus:ring-0"
              value="All cars"
            >
              <SlArrowDown className="text-black"/>
              <option>All cars </option>
              <option>Audi</option>
              <option>BMW</option>

              
            </select>
            <select
              className="px-12 w-full py-2 appearance-none h-fit rounded text-gray-500 focus:outline-none focus:ring-0"
              value="All cars"
            >
              <SlArrowDown className="text-black"/>
              <option>All cars </option>
              <option>Audi</option>
              <option>BMW</option>

              
            </select>

            <select
              className="px-12 w-full py-2 appearance-none h-fit rounded text-gray-500 focus:outline-none focus:ring-0"
              value="All cars"
            >
              <SlArrowDown className="text-black"/>
              <option>All cars </option>
              <option>Audi</option>
              <option>BMW</option>

              
            </select>

            <button className="px-12 w-full py-2 bg-[#04DBC0] text-white rounded hover:bg-[#03a39c] transition duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      <WhyChooseUs/>
      <CarsCarousel/>
    </div>
  );
}

export default Page;
