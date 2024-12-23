import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black bg-opacity-20">
      <Image
        src="/bgimage.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="z-[-1]"
      />

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
