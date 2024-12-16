"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiLocationOn, CiMobile4, CiAlarmOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.3); 
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.3)"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); 
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Cars", path: "/cars" },
    { title: "Booking", path: "/booking" },
    { title: "Pages", path: "/pages" },
    { title: "Blog", path: "/blog" },
    { title: "Shortcodes", path: "/shortcodes" },
    { title: "Shop", path: "/shop" },
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
        <div className="flex justify-between items-center">
          <div className="flex space-x-8 flex-row mr-auto">
            <div className="flex items-center space-x-2 flex-row">
              <CiLocationOn className="text-[#04DBC0] " />
              <h1 className="text-sm">184 Main Street East</h1>
            </div>

            <div className="flex items-center space-x-2 flex-row">
              <CiMobile4 className="text-[#04DBC0]" />
              <h1 className="text-sm">+91 9529575726</h1>
            </div>

            <div className="flex items-center space-x-2 flex-row">
              <CiAlarmOn className="text-[#04DBC0]" />
              <h1 className="text-sm">Mon - Fri , 10:30 To 06:00</h1>
            </div>
          </div>

          <div className="flex ml-auto mx-2 text-base space-x-2 md:space-x-6">
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
        <nav className="flex justify-between items-center px-4 md:mx-40">
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
            {navLinks.map(({ title, path }) => (
              <li
                key={title}
                className={`flex hover:text-[#04DBC0] items-center space-x-1 ${activeTab==title ? "text-[#04DBC0]": ""}`}
                onClick={() => handleTabClick(title)}
              >
                <Link className="hover:text-[#04DBC0]" href={path}>{title}</Link>
                <MdKeyboardArrowDown className="" />
              </li>
            ))}
          </ul>
        </nav>
      </div>


    </>
  );
}
