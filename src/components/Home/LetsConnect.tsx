import React from "react";
import { Cover } from "@/components/ui/cover";

function LetsConnect() {
  return (
    <div className="flex justify-center  sm:mt-0 -mt-[30vw]  items-center h-[60vh]">
      <h1 className="text-[10vw] sm:text-[4vw] rounded-lg font-semibold  mx-auto text-center mt-6 relative py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Let<span>&#39;</span>s Connect at <span className="sm:hidden"> <br /> </span>
        <a
          className="ml-2"
          href="https://www.linkedin.com/in/mohit-patel-5540b2273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <Cover className="text-red-600 w-[45vw] sm:w-[20vw]">linkedIn</Cover>
        </a>
      </h1>
    </div>
  );
}

export default LetsConnect;
