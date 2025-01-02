"use client";
import React from "react";
import { CiAlarmOn, CiLocationOn, CiMobile4 } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black ">
      <div className="flex md:space-x-3 flex-col md:flex-row text-white px-4 md:px-40 md:py-8">
        {/* About us */}
        <div className="flex flex-col w-full text-start">
          <h1 className="text-xl font-[700] pt-12">About Us</h1>
          <p className="text-sm leading-relaxed text-[#CCCCCC] pt-2">
            About Us Getting dressed up and traveling with good friends makes for a shared, unforgettable experience
          </p>

          <div>
            <h1 className="text-4xl text-white py-2 font-[700]">Dattaraj</h1>
          </div>
        </div>
        <div className="flex flex-col md:w-full text-start">
          <h1 className="text-xl font-[700] pt-4 md:pt-12">Contact Info</h1>
          <div className="flex flex-col text-lg space-y-4 py-4 items-start text-right md:mr-auto">
            <div className="flex items-center md:space-x-4 flex-row">
              <CiLocationOn className=" " />
              <h1 className="text-sm">184 Main Street East</h1>
            </div>

            <div className="flex items-center md:space-x-2 flex-row">
              <CiMobile4 className="" />
              <h1 className="text-sm">+91 7841959650</h1>
            </div>

            <div className="flex items-center  md:space-x-2 flex-row">
              <CiAlarmOn className="" />
              <h1 className="text-sm">Mon - Fri , 10:30 To 06:00</h1>
            </div>

            <div className="flex text-base items-start text-start space-x-1 md:space-x-4">
            <button className="transition-transform bg-[#4BC1B3] p-3 rounded-full transform duration-300 hover:scale-110 active:scale-90">
              <FaInstagram />
            </button>
            <button className="transition-transform bg-[#4BC1B3] p-3 rounded-full transform duration-300 hover:scale-110 active:scale-90">
              <FaTwitter />
            </button>
            <button className="transition-transform bg-[#4BC1B3] p-3 rounded-full transform duration-300 hover:scale-110 active:scale-90">
              <FaFacebookF />
            </button>
            <button className="transition-transform bg-[#4BC1B3] p-3 rounded-full transform duration-300 hover:scale-110 active:scale-90">
              <FaLinkedin />
            </button>
          </div>
          </div>
        </div>
        <div className=" flex-col md:w-full text-start hidden md:flex">
          <h1 className="text-xl font-[700] pt-12">Newsletter</h1>
          <p className="text-sm leading-relaxed text-[#CCCCCC] pt-2">
            Don&apos;t miss a thing! Sign up to receive daily deals
          </p>

        </div>
      </div>

      <div className="flex text-white text-sm md:text-xs w-full items-center justify-center py-8 md:px-40 border-t border-[#222222]">
        <div className="flex flex-row space-x-2 md:flex-row md:space-x-8 md:ml-auto items-start ">
            <h1>About Us</h1>
            <h1>Cars</h1>
            <h1>Booking</h1>
            <h1>Contact Us</h1>
        </div>
      </div>

    </div>
  );
};

export default Footer;
