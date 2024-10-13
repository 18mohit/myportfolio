import React from 'react'
import { BackgroundBeams } from '../ui/background-beams';

const MiniAbout: React.FC = () => {
  return (
    <> 
    <div className=''>
        <div className='sm:mt-[12vw] -mt-[19vw] flex justify-center items-center'>
          <BackgroundBeams className='mt-[45vw] h-[65vw]' />
          <div className='sm:max-w-[70vw] max-w-[90vw] h-full flex justify-center items-center'>
            <p className='flex justify-center items-center align-middle text-center sm:text-[2vw] text-[4vw]'>
            As a passionate and driven web developer, I leverage my technical skills and creativity to design 
            and build engaging, responsive, and user-centric digital products and experiences, always seeking 
            innovative solutions and staying up-to-date with the latest web development trends.
            </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default MiniAbout