// components/Home/Skill.tsx
"use client"
import React, { ReactNode } from 'react';
import { motion } from "framer-motion";
import HtmlIcon from "../Home/htmlIcon"
import CssIcon from "../Home/cssIcon"
import JsIcon from "../Home/JsIcon"
import ReactIcon from "../Home/ReactIcon"
import ReduxIcon from "../Home/ReduxIcon"
import TailwindIcon from "../Home/TailwindIcon"
import NextIcon from "../Home/NextIcon"
import NodejsIcon from "../Home/NodejsIcon"
import MongoIcon from "../Home/MongoIcon"
import GitIcon from "../Home/GitIcon"

const Skills = ({
  icon,
  x,
  y,
  title,
}: {
  icon: ReactNode;
  x: string;
  y: string;
  title: string;
}) => {
  return (
    <motion.div
      className="absolute cursor-pointer flex justify-center items-center sm:bg-white opacity-80 w-[20vw] h-[20vw] sm:w-[9vw] sm:h-[9vw] sm:shadow-sm rounded-full font-semibold py-2 px-3 sm:py-3 sm:px-6 shadow-black"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 3px 3px rgba(0, 0, 255, 0.5)",
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
    >
      <span className="hidden sm:block">{icon}</span>
      <div className="absolute sm:bottom-0 sm:left-0 sm:right-0 flex justify-center text-center items-center">
        <p className="sm:text-black text-white text-lg sm:text-base">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

interface SkillProps {
  skills: Array<{ title: string; icon: ReactNode; x: string; y: string; }>; // Define prop types
}

function Skill({ skills }: SkillProps) {
  return (
    <>
      <h1 className="text-4xl sm:mt-0 -mt-[40vw] font-bold ml-[2vw] text-blue-600">
        Skills
      </h1>

      {/* Render skills dynamically */}
      <div className="-mt-[30vw] sm:-mt-0 w-full h-screen relative rounded-full bg- sm:flex hidden justify-center items-center">
        {skills.map((skill, index) => (
          <Skills
            key={index}
            icon={skill.icon}
            title={skill.title}
            x={skill.x}
            y={skill.y}
          />
        ))}
      </div>
      <div className="sm:hidden block mb-[30vw] text-white">
        <div className="grid grid-cols-2 gap-2 justify-items-center items-center">
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <HtmlIcon width={100} height={80} />
            <p className="text-center">HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <CssIcon width={100} height={80} />
            <p className="text-center">CSS</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <JsIcon width={100} height={80} />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <ReactIcon width={100} height={80} />
            <p className="text-center">ReactJs</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <ReduxIcon width={100} height={80} />
            <p className="text-center">Redux</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <TailwindIcon width={100} height={80} />
            <p className="text-center">Tailwind</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <NextIcon className="w-20 h-20 rounded-full" width={100} height={80} />
            <p className="text-center">NextJs</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <NodejsIcon width={100} height={80} />
            <p className="text-center">NodeJs</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <MongoIcon width={100} height={80} />
            <p className="text-center">MongoDB</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30vw] h-[30vw]">
            <GitIcon width={100} height={80} />
            <p className="text-center">Git</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
