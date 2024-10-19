// components/Home/Home.tsx
import React, { ReactNode } from 'react';
import Hero from "@/components/Home/Hero";
import MiniAbout from "@/components/Home/MiniAbout";
import Skill from "@/components/Home/Skill";
import Project from "@/components/Home/Project/project";
import LetsConnect from "@/components/Home/LetsConnect";

interface HomeProps {
  title: string;
  description: string;
  miniAboutText: string;
  skills: Array<{ title: string; icon: ReactNode; x: string; y: string }>; // Add skills prop
}

const Home: React.FC<HomeProps> = ({ miniAboutText, skills }) => {
  return (
    <>
      <Hero name="Mohit" /> 
      <MiniAbout text={miniAboutText} />
      <Skill skills={skills} /> 
      <Project />
      <LetsConnect />
    </>
  );
};

export default Home;
