import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black bg-opacity-20" >
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video
          className="w-full h-full object-cover"
          src="/videoplayback.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      {/* Foreground Content */}
      <h1 className="text-4xl font-[900] text-white text-center">
        Our Fleet, Your Fleet
      </h1>
      <p className="text-base text-center font-[500] px-8 md:px-80 py-4 text-white">
        We know the difference is in the details and that’s why our car rental
        services, in the tourism <br />
        and business industry, stand out for their quality and good taste, to
        offer you a unique experience.
      </p>
      <h2 className="text-3xl font-[500] py-4 text-white">
        Call Now (54)-344-4533-4
      </h2>
    </div>
  );
};

export default WelcomeSection;
