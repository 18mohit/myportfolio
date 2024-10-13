import React from 'react'
import Image from 'next/image'
import myImage from '../../public/myImage.jpg';
import TextAnimation from './TextAnimation';
import Role from './Role';
import Link from 'next/link';
import LinkIcon from './LinkIcon';
function Hero() {
  return (
        <div className="flex mt-[9vw] justify-evenly h-[55vh]">
          <div className='-ml-28 hidden md:block'>
            <Image
            className='w-[30vw] h-[30vw] rounded-full opacity-65'
            src={myImage} alt="hero" />
          </div>
          <div className='flex flex-col sm:mt-[8vw] mt-[12vw] text-wrap w-[80vw] sm:w-[45vw]'>
              <h1 className='text-5xl font-bold'>Hello, I'm <span className='text-yellow-300'>Mohit.</span></h1>
              <p className='text-2xl mt-1'>
                <Role />
              </p>
              <div className='flex flex-col text-md mt-3'>
                <TextAnimation />
              </div>
              <div className='text-blue-700 text-xl mt-5 flex justify-end sm:mr-[8vw] mr-[2vw]'>
                <Link className=' flex items-center text-[#00008b]' target="_blank" href="https://drive.google.com/file/d/1-94yfh_VmguSmM4uc3DZmNh3QvndhJ4b/view?usp=drive_link">Resume
                 <LinkIcon className='ml-[1px] underline' />
                </Link>
              </div>
          </div>
        </div>
  )
}

export default Hero