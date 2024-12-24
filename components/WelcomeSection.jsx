import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/40 ">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video
          className="w-full h-full object-cover"
          src="/welcome.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>


      {/* Foreground Content */}
      <h1 className="text-4xl font-[900] text-white text-center">
        Welcome to Dattaraj Car Rental
      </h1>
      <p className="text-base text-center font-[500] px-8 md:px-80 py-4 text-white">
        We are a Kolhapur born, Kolhapur based travel solutions agency
        delivering excellent travel and rental services to people in Kolhapur.
        Our years of experience in the city, and familiarity with the culture
        and routes of the area make us a dependable travel companion for all
        your trips, whether personal, or in groups.
      </p>
      <h2 className="text-3xl font-[500] py-4 text-white">
        Call Now +91 7841959650
      </h2>
    </div>
  );
};

export default WelcomeSection;
