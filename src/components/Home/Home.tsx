import React from 'react'
import Hero from "@/components/Home/Hero";
import MiniAbout from "@/components/Home/MiniAbout";
import Skill from "@/components/Home/Skill";
import Project from "@/components/Home/Project/project";
import LetsConnect from "@/components/Home/LetsConnect";
function Home() {
  return (
    <>
    <Hero />
    <MiniAbout />
    <Skill />
    <Project />
    <LetsConnect />
    </>
  )
}

export default Home