'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'A passionate web developer specializing in creating dynamic user-friendly applications.',
      ]}
      wrapper="span"
      speed={30}
      repeat={0} // Change this to 0 to play the animation only once
    />
  )
}

export default TextAnimation