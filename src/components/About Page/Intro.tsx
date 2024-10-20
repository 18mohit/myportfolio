import React from "react";
import Experience from "./experience";
import Image from "next/image";
import myImage from '../../public/myImage.jpg';

function Intro() {
  return (
    <>
      <div className=" mt-[20vw] sm:mt-[5vw] flex flex-col text-white justify-center items-center">
        <h1 className="text-[12vw] sm:text-[3vw] text-yellow-100 font-bold">About Me</h1>
        <div className='block md:hidden'>
            <Image
            className='w-[80vw] h-[80vw]  opacity-65'
            src={myImage} alt="hero" />
          </div>
        <div className="flex sm:flex-row flex-col gap-[10vw] mt-[1vw] items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[8vw] sm:text-[4vw] text-yellow-300 font-bold">
              Mohit Patel
            </h1>
            <h1 className=" text-[4vw] sm:text-[1.5vw] font-bold">Full Stack Developer</h1>
            <h1 className=" text-[4vw] sm:text-[1.5vw] font-bold">Ahmedabad, Gujarat</h1>
          </div>
          <p className="text-xl mt-4 text-center w-[100vw] sm:w-[60vw]  ">
            I have been actively working in web development for the past two
            years, honing my skills and knowledge. My expertise includes working
            with technologies such as MERN stack, Next.js, and Tailwind CSS.
            These tools allow me to build fast, scalable, and modern web
            applications that focus on both performance and design. I enjoy
            combining these technologies to create efficient solutions that
            address complex challenges, while maintaining a focus on user
            experience and clean, maintainable code.
          </p>
        </div>
      </div>
      <div className="ml-[4vw] text-white mt-[7vh] gap-[10vh]">
        <h1 className="text-[10vw] sm:text-[3vw] font-bold">Skills & Experience</h1>
        <div className="w-full font-bold mt-2 flex flex-col sm:flex-row gap-[1.5vw]">
          <div className="w-full font-bold mt-2 flex flex-row space-x-5 sm:space-x-0 justify-center sm:flex-row gap-[1.5vw]">
            <h1 className="sm:w-[6vw] w-[25vw] ">JavaScript, TypeScript, React, Next.js, Tailwind CSS</h1>
            <h1 className="sm:w-[6vw] w-[25vw] ">Node.js, Express, Postman, MongoDB, MySQL</h1>
          </div>
        <div className="sm:ml-[15vw] ml-[5vw] mt-[0vh] sm:-mt-[10vh]">
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
