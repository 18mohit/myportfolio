"use client";
import React from "react";
import Link from "next/link";
import LinkedinIcon from "./icon";
import XIcon from "./XIcon";
import GithubIcon from "./GithubIcon";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, title }: { href: string; title: string; }) => {
  const pathname = usePathname();
  const isActive = pathname === href;  
  return (
      <Link className={`group relative ${isActive ? '' : ''}`} href={href}>
      {title}
      <span
        className={`h-[1px] inline-block absolute bg-yellow-500 bottom-0 left-0 
        group-hover:w-full transition-[width] ease duration-300
        ${isActive ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-3 w-full flex justify-around items-center z-50 gap-1 text-white sm:gap-4">
      <div className="flex gap-10">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
      </div>
      <div className="w-[0vw] sm:w-[45vw]"></div>
      <div className="flex gap-5">
        <Link className="w-10" target="_blank" href="https://www.linkedin.com/in/mohit-patel-5540b2273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedinIcon className="w-10 h-10" color="white" />
        </Link>
        <Link className="w-9 h-9 -mt-1" target="_blank" href="https://x.com/PatelMo89039387?t=OS9N3Qxv5NxPTQTHDRlzjQ&s=09">
            <XIcon color="white" />
        </Link>
        <Link className="w-10 h-10 -mt-3" target="_blank" href="https://github.com/18mohit">
            <GithubIcon color="white" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;