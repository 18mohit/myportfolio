'use client'
import { TypeAnimation } from 'react-type-animation';

const Role = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web developer.',
        2000,
        'Full Stack Developer.',
        2000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

export default Role;
