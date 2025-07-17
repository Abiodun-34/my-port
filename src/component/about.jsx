import React from 'react';
import Typewriter from 'typewriter-effect';
import codeImg from "../assets/image.jpg";
import image1 from "../assets/css.png";
import image2 from "../assets/git.png";
import image3 from "../assets/html.png";
import image4 from "../assets/javascript.png";
import image5 from "../assets/react.png";
import image6 from "../assets/tailwind.png";




const ImageList = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 }, 
  { img: image6 }
];

const About = () => {
  return (
    <div className="bg-blue-300 relative min-h-screen bg-center bg-no-repeat bg-cover pt-10 px-6 md:pt-20">
      <h1 className="tracking-tight font-bold text-2xl md:text-5xl text-white pl-10">Introduction</h1>
      <p className="tracking-tight font-extrabold text-4xl md:text-9xl pt-5 text-black pl-12">Overview</p>

      <div className="tracking-tight font-bold mt-6 text-xl md:text-3xl text-white text-justify grid grid-cols-1 lg:grid-cols-2 gap-8 pl-15">
        <Typewriter
          options={{
            strings: [
              `Hi, I’m Abiodun a self-taught frontend developer passionate about crafting solution-driven web experiences, one div at a time.
No bootcamps, no formal training just relentless curiosity and a browser full of tabs.
I’ve taught myself the core technologies of the web: <strong style="color: black; font-weight:800;">HTML, CSS, Tailwind, JavaScript, React, Git, GitHub, and Bootstrap</strong>
and along the way, discovered a deep love for building clean, responsive, and intuitive user interfaces.
For me, frontend development is like solving a beautiful puzzle: combining structure, style, and interactivity to bring ideas to life.
I thrive on transforming static designs into dynamic, user-friendly experiences, with a sharp focus on performance, accessibility, and just a bit of wow ✨.
Whether it’s sleek landing pages or full-scale web apps, I’m here to build digital experiences that not only look great — but feel great to use.
Let’s build something amazing.`
            ],
            autoStart: true,
            loop: true,
            delay: 40,
          }}
        />

      {/* Right: Image Section */}
      <div className="flex items-center justify-center">
                    <img
                      src={codeImg}
                      alt="code"
                      className="w-full pt-1 h-full object-none rounded-lg"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400";
                      }}
                    />
        </div>
      </div>

              {/* Image Grid Section */}
          <div className="w-full flex items-center mt-12 mb-0">
            <div 
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="container mx-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 pb-15">
                {ImageList.map((image) => (
                  <div key={image.id} className="group">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={image.img}
                        alt={image.alt}
                        className="w-full h-32 sm:h-48 object-contain p-4 border-4 border-amber-600 rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
    </div>
  );
};

export default About;
