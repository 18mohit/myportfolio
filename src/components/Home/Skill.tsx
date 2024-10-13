"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import JsIcon from "./jsIcon";
import TailwindIcon from "./TailwindIcon";
import ReactIcon from "./ReactIcon";
import ExpressIcon from "./expressIcon";
import MongoIcon from "./mongoIcon";
import GitIcon from "./gitIcon";
import ReduxIcon from "./reduxIcon";
import HtmlIcon from "./htmlIcon";
import CssIcon from "./cssIcon";
import NextIcon from "./nextIcon";
import NodejsIcon from "./nodejsIcon";
import WebDevIcon from "./webDevIcon";

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
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      <span className="hidden sm:block">{icon}</span>
      <div className="absolute sm:bottom-0 sm:left-0 sm:right-0 flex justify-center text-center items-center">
        <p className="sm:text-black text-white text-lg  sm:text-base">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

function Skill() {
  return (
    <>
      <h1 className="text-4xl sm:mt-0 mt-[10vw] font-bold ml-[2vw] text-blue-600 ">
        Skills
      </h1>
      <div className="sm:hidden block mb-[40vw]">
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
            <NextIcon width={100} height={80} />
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

      <div className="-mt-[30vw] sm:-mt-0 w-full h-screen relative rounded-full bg- sm:flex hidden justify-center items-center">
        <motion.div
          className=" cursor-pointer flex justify-center items-center rounded-full bg- drop-shadow-sm text-white font-semibold p-4 shadow-black"
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-xl py-7 hidden sm:block">
            <WebDevIcon width={100} height={80} />
          </h2>
        </motion.div>
        <Skills
          icon={<HtmlIcon width={100} height={80} />}
          title="HTML"
          x="-1vw"
          y="10vw"
        />
        <Skills
          icon={<CssIcon width={100} height={80} />}
          title="CSS"
          x="-1vw"
          y="-10vw"
        />
        <Skills
          icon={<JsIcon width={100} height={80} />}
          title="JavaScript"
          x="-12vw"
          y="1vw"
        />
        <Skills
          icon={<TailwindIcon width={100} height={80} />}
          title="TailWind"
          x="12vw"
          y="2vw"
        />
        <Skills
          icon={<ReactIcon width={100} height={80} />}
          title="ReactJs"
          x="-18vw"
          y="-13vw"
        />
        <Skills
          icon={<NextIcon width={100} height={80} />}
          title="NextJs"
          x="-30vw"
          y="-4vw"
        />
        <Skills
          icon={<ExpressIcon width={100} height={80} />}
          title="ExpressJs"
          x="12vw"
          y="-14vw"
        />
        <Skills
          icon={<MongoIcon width={100} height={80} />}
          title="MongoDB"
          x="-12vw"
          y="20vw"
        />
        <Skills
          icon={<GitIcon width={100} height={80} />}
          title="Git"
          x="-26vw"
          y="12vw"
        />
        <Skills
          icon={<ReduxIcon width={100} height={80} />}
          title="Redux"
          x="26vw"
          y="-2vw"
        />
        <Skills
          icon={<NodejsIcon width={100} height={80} />}
          title="NodeJs"
          x="12vw"
          y="19vw"
        />
      </div>
    </>
  );
}

export default Skill;
