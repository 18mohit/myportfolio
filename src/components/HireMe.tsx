import Image from 'next/image'
import React from 'react'
import circle from '../public/CircleImage.png'
import Link from 'next/link'

function HireMe() {
  return (
    <div className='fixed sm:-bottom-[4vw] -bottom-10 sm:-right-[4vw] -right-[10vw] flex items-center justify-center overflow-hidden'>
        <div className='w-full h-auto flex relative items-center justify-center'>
            <Link 
                href="mailto:mohitptl183@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className='absolute hover:bg-sky-900 hover:text-white hover:text-2xl transition-colors duration-400 cursor-pointer
                bg-slate-300 shadow-lg font-bold text-black p-2 rounded-full w-16 h-16 sm:w-24 sm:h-24
                flex items-center justify-center text-[3vw] sm:text-base md:text-lg'
            >
                Hire Me
            </Link>
            <Image src={circle} alt='circle' className='animate-spin-slow sm:w-[20vw] w-[50vw] z-[-1]' />
        </div>
    </div>
  )
}

export default HireMe