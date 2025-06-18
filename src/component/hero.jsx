import React from 'react';
import codeImg from "../assets/code.jpg";
import video1 from "../assets/video1.mp4";
import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <div className="bg-gray-800 relative min-h-screen bg-center bg-no-repeat bg-cover pt-16 md:pt-20">
      <div className="container mx-auto flex flex-col h-full px-4">
        {/* Grid with 2 rows */}
        <div className="grid grid-rows-[1fr_auto] gap-6 h-full w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Left: Text Section */}
            <div className="flex flex-col items-start justify-center text-left">
              <h1 className="tracking-tight font-extrabold text-6xl md:text-9xl text-white">HI 😎,</h1>
              <p className="tracking-tight font-extrabold mt-9 text-4xl md:text-7xl pl-1 text-white">
                I'm Abiodun
              </p>
               <div className="tracking-tight font-extrabold mt-6 text-2xl md:text-5xl pl-9 text-white">
                <Typewriter
                  options={{
                    strings: [
                      `I <span style="color:#f97316">Create</span>, 
                       <span style="color:#f97316">Build</span>, 
                       and write scalable <span style="color:#f97316">Code</span> for fun.`],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="flex items-center justify-center">
              <img
                src={codeImg}
                alt="code"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400";
                }}
              />
            </div>
          </div>

          {/* Row 2: Centered Video Section */}
          <div className="flex justify-center mt-6">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full max-w-3xl border border-orange-700 shadow-sm shadow-orange-400"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
