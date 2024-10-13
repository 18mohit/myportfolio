"use client"
import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'

function experience() {
  return (
    <div className="sm:w-[64vw] w-[75vw] sm:ml-[0vw] ml-[4vw]">
      <HoverEffect items={exp} />
    </div>
  );
}

export const exp = [
    {
      title: "HTML/CSS Developer",
      company: "Marastu",
      duration: "dec-2023 to march-2024",
      description:
        "As an intern, I learned to develop responsive and SEO-friendly websites using HTML and CSS, ensuring optimal performance and user accessibility across all devices.",
      link: "",
    },
    {
      title: "React js/Shopify Developer",
      company: "Keatsu Digital",
      duration: "May-2024 to Present",
      description:
        "I have worked with React.js to build dynamic, interactive user interfaces, and have also gained experience with Shopify to develop and customize e-commerce websites tailored to business needs.",
      link: "",
    },
  ];

export default experience