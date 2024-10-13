import React from 'react'

function Footer() {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2024 
            <a href="https://www.linkedin.com/in/mohit-patel-5540b2273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Mohit</a>. All rights reserved.</p>
            <p>Created with Next.js</p>
            <p></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer