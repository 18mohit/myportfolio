// components/Home/MiniAbout.tsx
import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';

interface MiniAboutProps {
  text: string; // Define the prop type for the text
}

const MiniAbout: React.FC<MiniAboutProps> = ({ text }) => {
  return (
    <>
      <div className=''>
        <div className='sm:mt-[18vw] mt-[10vw] flex justify-center items-center'>
          <BackgroundBeams className='mt-[80vw] z-[-10] sm:mt-[45vw] h-[65vw]' />
          <div className='sm:max-w-[70vw] max-w-[90vw] h-full flex justify-center items-center'>
            <p className='flex justify-center items-center align-middle text-center sm:text-[2vw] text-[4vw]'>
              {text} {/* Use the prop here */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniAbout;
