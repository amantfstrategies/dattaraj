"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn, CiMobile4, CiAlarmOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger icon
import { CarData } from "@/app/CarData";
import { MiniBusesData } from "@/app/MiniBusesData";
import { LuxuryBusesData } from "@/app/luxuryBusesData";
import path from "path";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.3)");
  const [dropdownOpen, setDropdownOpen] = useState(null);


  const navLinks = [
    { title: "Home", path: "/", showUpArrow: false },
    {
      title: "Cars",
      path: "/cars",
      dropdownItems: CarData,
    },
    {
      title: "Luxury-bus",
      path  : "/luxury-bus",
      dropdownItems: LuxuryBusesData,
    },
    {
      title: "Mini-bus",
      path: "/mini-bus",
      dropdownItems: MiniBusesData,
    },

    { title: "Booking", path: "/contact", showUpArrow: false },
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

  const getActiveTab = () => {
    if (pathname.startsWith("/cars")) return "Cars";
    if (pathname.startsWith("/luxury-bus")) return "Luxury-bus";
    if (pathname.startsWith("/mini-bus")) return "Mini-bus";
    if (pathname.startsWith("/taxi")) return "Taxi";
    return navLinks.find((link) => link.path === pathname)?.title || "Home";
  };

  const activeTab = getActiveTab();

  return (
    <>
      <div className="bg-black z-50 text-white px-4 md:px-40 py-4">
        <div className="flex flex-col md:flex-row justify-between px-4 items-center">
          <div className="flex space-x-1 md:space-x-8 flex-row mr-auto">
            <div className="flex items-center space-x-2 flex-row">
              <CiLocationOn className="text-[#4BC1B3]" />
              <h1 className="text-[10px] md:text-sm whitespace-nowrap">
                184 Main Street East
              </h1>
            </div>

            <div className="flex items-center space-x-2 flex-row">
              <CiMobile4 className="text-[#4BC1B3]" />
              <h1 className="text-[10px] md:text-sm whitespace-nowrap">
                +91 78419 59650
              </h1>
            </div>

            <div className="flex items-center md:space-x-2 flex-row">
              <CiAlarmOn className="text-[#4BC1B3]" />
              <h1 className="text-[10px] md:text-sm">
                <span className="whitespace-nowrap">Mon - Fri , 10:30</span>{" "}
                <span> To 06:00</span>
              </h1>
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
        className={`sticky top-0 z-50 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <nav className="flex justify-between items-center py-4 md:py-0 px-8 md:px-0 md:mx-40">
          <div>
            <h1 className="text-4xl text-white font-[700]">Dattaraj</h1>
          </div>
          {/* Desktop View */}
          <ul
            className={`hidden md:flex md:flex-row md:space-x-8 text-sm font-medium ml-auto text-white md:my-7`}
          >
            {navLinks.map(({ title, path, dropdownItems }) => (
              <li
                key={title}
                className={`relative flex hover:text-[#4BC1B3] items-center space-x-1 ${
                  activeTab === title ? "text-[#4BC1B3]" : ""
                }`}
                onMouseEnter={() => dropdownItems && setDropdownOpen(title)}
                onMouseLeave={() => dropdownItems && setDropdownOpen(null)}
              >
                {!dropdownItems ? (
                  <Link href={path} onClick={() => setIsMobileMenuOpen(false)}>
                    {title}
                  </Link>
                ) : (
                  <span className="cursor-pointer">{title}</span>
                )}
                {dropdownItems && <MdKeyboardArrowDown className={`block`} />}
                {dropdownOpen === title && dropdownItems && (
                  // console.log("title", title),
                  // console.log("dropdownItems", dropdownItems),
                  // console.log("path", path),
                  <ul key={title} className="absolute z-50 whitespace-nowrap top-full left-0 bg-white text-black shadow-md rounded-md py-2">
                    {dropdownItems.map((car) => (
                      <Link key={car.id} href={path}>
                      <li
                        key={car.id}
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setDropdownOpen(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {car.car.name}
                      </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            
          </ul>

          {/* Mobile View */}
          <ul
            className={`md:hidden flex flex-col space-y-4 w-full text-center px-8 py-4 absolute left-0 top-full bg-black text-white transition-all duration-500 ease-in-out transform ${
              isMobileMenuOpen
                ? "opacity-100 max-h-screen scale-y-100"
                : "opacity-0 max-h-0 scale-y-0"
            }`}
          >
            {navLinks.map(({ title, path, dropdownItems }) => (
              <li
                key={title}
                className={`relative flex hover:text-[#4BC1B3] items-center space-x-1 ${
                  activeTab === title ? "text-[#4BC1B3]" : ""
                }`}
                onMouseEnter={() => dropdownItems && setDropdownOpen(title)}
                onMouseLeave={() => dropdownItems && setDropdownOpen(null)}
              >
                {!dropdownItems ? (
                  <Link href={path} onClick={() => setIsMobileMenuOpen(false)}>
                    {title}
                  </Link>
                ) : (
                  <span className="cursor-pointer">{title}</span>
                )}
                {dropdownItems && <MdKeyboardArrowDown className={`block`} />}
                {dropdownOpen === title && dropdownItems && (
                  <ul className="absolute z-50 whitespace-nowrap top-full left-0 bg-white text-black shadow-md rounded-md py-2">
                    {dropdownItems.map((car) => (
                      <li
                        key={car.id}
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setDropdownOpen(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <Link href={path}>{car.car.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button for Mobile View */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
