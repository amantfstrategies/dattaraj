"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiLocationOn, CiMobile4, CiAlarmOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { title } from "process";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.3); 
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.3)"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); 
  };

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navLinks = [
    { title: "Home", path: "/", showUpArrow: false },
    { 
      title: "Cars", 
      dropdownItems: [
        { title: "Audi-A3", path: "/cars/audi-a3" },
        { title: "Innova Cresta", path: "/cars/innova-cresta" },
        { title: "Suzuki Swift", path: "/cars/suzuki-swift" },
        { title: "Honda Civic", path: "/cars/honda-civic" },
        {title: "Honda city", path: "/cars/honda-city" },
        { title: "Tata Nexon", path: "/taxi/tata-nexon" },
      ] 
    },
    { 
      title: "Luxury-bus", 
      dropdownItems: [
        { title: "Volvo", path: "/luxury-bus/volvo" },
        { title: "mercedes", path: "/luxury-bus/mercedes" },

      ] 
    },
    { title: "Mini-bus",
      dropdownItems: [
        { title: "Force Traveler", path: "/mini-bus/force-traveler" },
        { title: "Tata starbus", path: "/mini-bus/tata-starbus" },
        { title: "Tampo Traveler", path: "/mini-bus/tampo-traveler" },

      ] 
    },
    { title: "Taxi", 
      dropdownItems: [
        { title: "Dzire", path: "/taxi/dzire" },
        { title: "Ciaz", path: "/taxi/ciaz" },
        { title: "Tata Indica", path: "/taxi/tata-indica" },
        
      ] 
     },
    { title: "Booking", path: "/booking", showUpArrow: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setOpacity(1); 
        setBgColor("rgba(0, 0, 0, 1)"); 
      } else {
        setOpacity(0.3); 
        setBgColor("rgba(0, 0, 0, 0.3)");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* top header black */}
      <div className="bg-black z-50 text-white px-4 md:px-40 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-1 md:space-x-8 flex-row mr-auto">
            <div className="flex items-center space-x-2 flex-row">
              <CiLocationOn className="text-[#04DBC0] " />
              <h1 className="text-[10px] md:text-sm whitespace-nowrap">184 Main Street East</h1>
            </div>

            <div className="flex items-center space-x-2 flex-row">
              <CiMobile4 className="text-[#04DBC0]" />
              <h1 className="text-[10px] md:text-sm whitespace-nowrap">+91 9529575726</h1>
            </div>

            <div className="flex items-center md:space-x-2 flex-row">
              <CiAlarmOn className="text-[#04DBC0]" />
              <h1 className="text-[10px] md:text-sm ">Mon - Fri , 10:30 To 06:00</h1>
            </div>
          </div>

          <div className="hidden md:flex md:ml-auto justify-between w-full md:w-fit px-8 md:px-0 py-4 md:py-0 mx-2 text-base space-x-2 md:space-x-6">
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaInstagram />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaTwitter />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaFacebookF />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>

      <div
        className={` sticky top-0 z-50 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out`}
        style={{
          backgroundColor: bgColor,
          
        }}
      >
        <nav className=" flex justify-between items-center py-4 md:py-0 px-8 md:px-0  md:mx-40">
          <div>
            <h1 className="text-4xl text-white font-[700]">Dattaraj</h1>
          </div>
          <ul
            className={`${
              isMobileMenuOpen
                ? "flex flex-col space-y-4 w-full text-center mt-4  "
                : "hidden md:flex md:flex-row md:space-x-8"
            } text-sm font-medium ml-auto text-white my-7`}
          >
            {navLinks.map(({ title, path, dropdownItems, showUpArrow = true }) => (
              <li
                key={title}
                className={`relative flex hover:text-[#04DBC0] items-center space-x-1 ${activeTab === title ? "text-[#04DBC0]" : ""}`}
                onMouseEnter={() => dropdownItems && setDropdownOpen(title)}
                onMouseLeave={() => dropdownItems && setDropdownOpen(null)}
              >
                {!dropdownItems ? (
                  <Link className="hover:text-[#04DBC0]" href={path}>{title}</Link>
                ) : (
                  <span className="cursor-pointer">{title}</span>
                )}
                {dropdownItems && <MdKeyboardArrowDown className={`block`} />}
                {dropdownOpen === title && dropdownItems && (
                  <ul className="absolute whitespace-nowrap top-full left-0 bg-white text-black shadow-md rounded-md py-2">
                    {dropdownItems.map(({ title, path }) => (
                      <li key={title} className="px-4 py-2 hover:bg-gray-100">
                        <Link href={path}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
