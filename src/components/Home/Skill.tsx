// components/Home/Skill.tsx
"use client"
import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

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
      <h1 className="text-4xl sm:mt-0 mt-[10vw] font-bold ml-[2vw] text-blue-600">
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
    </>
  );
}

export default Skill;
