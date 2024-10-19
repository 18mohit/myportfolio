// app/page.tsx
import React from 'react';
import HomeComponent from "@/components/Home/Home";
import HtmlIcon from "@/components/Home/htmlIcon";
import JsIcon from "@/components/Home/jsIcon";
import TailwindIcon from "@/components/Home/TailwindIcon";
import ReactIcon from "@/components/Home/ReactIcon";
import CssIcon from "@/components/Home/cssIcon";
import ExpressIcon from "@/components/Home/expressIcon";
import MongoIcon from "@/components/Home/mongoIcon";
import NodejsIcon from "@/components/Home/nodejsIcon";
import ReduxIcon from "@/components/Home/reduxIcon";
import GitIcon from "@/components/Home/gitIcon";
import NextIcon from "@/components/Home/nextIcon";

const skillsData = [
  { title: "HTML", icon: <HtmlIcon width={100} height={80} />, x: "-1vw", y: "10vw" },
  { title: "CSS", icon: <CssIcon width={100} height={80} />, x: "-1vw", y: "-10vw" },
  { title: "JavaScript", icon: <JsIcon width={100} height={80} />, x: "-12vw", y: "1vw" },
  { title: "Tailwind", icon: <TailwindIcon width={100} height={80} />, x: "12vw", y: "2vw" },
  { title: "ReactJs", icon: <ReactIcon width={100} height={80} />, x: "-18vw", y: "-13vw" },
  { title: "NextJs", icon: <NextIcon width={100} height={80} />, x: "-30vw", y: "-4vw" },
  { title: "ExpressJs", icon: <ExpressIcon width={100} height={80} />, x: "12vw", y: "-14vw" },
  { title: "MongoDB", icon: <MongoIcon width={100} height={80} />, x: "-12vw", y: "20vw" },
  { title: "Git", icon: <GitIcon width={100} height={80} />, x: "-26vw", y: "12vw" },
  { title: "Redux", icon: <ReduxIcon width={100} height={80} />, x: "26vw", y: "-2vw" },
  { title: "NodeJs", icon: <NodejsIcon width={100} height={80} />, x: "12vw", y: "19vw" },
];

// Fetch data directly in the component
const fetchData = async () => {
  return {
    title: 'Welcome to My Portfolio',
    description: 'I am Mohit, a passionate Full Stack Developer specializing in dynamic applications.',
    miniAboutText: 'As a passionate and driven web developer, I leverage my technical skills and creativity to design and build engaging, responsive, and user-centric digital products and experiences, always seeking innovative solutions and staying up-to-date with the latest web development trends.',
    skills: skillsData, // Pass the skills array here
  };
};

const HomePage = async () => {
  const { title, description, miniAboutText, skills } = await fetchData();

  return (
    <HomeComponent title={title} description={description} miniAboutText={miniAboutText} skills={skills} />
  );
};

export default HomePage;
