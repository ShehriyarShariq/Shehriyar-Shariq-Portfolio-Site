import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";

function Contact() {
  return (
    <div className="w-full h-full px-[8%] md:px-[10%] mt-0 md:mt-24">
      <div className="text-3xl sm:text-5xl text-center mb-6 sm:mb-10">
        <span className="text-primary whitespace-nowrap">
          <OverlappingCharacter
            char="G"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          et
        </span>
        <span className="text-primary whitespace-nowrap ml-3 sm:ml-4">
          <OverlappingCharacter
            char="i"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          n
        </span>
        <span className="text-primary whitespace-nowrap ml-3 sm:ml-4">
          <OverlappingCharacter
            char="T"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          ouch
        </span>
      </div>
      <p className="w-full md:w-3/4 text-white text-base mx-auto mb-6 sm:mb-10">
        Hello there. Do you have any questions about my work, or do you want to
        work on a new venture with me? Or perhaps you just want to say Hi!
        <br /> Write to me at any time and I will be glad to get back to you as
        soon as possible!
      </p>
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="w-full h-[60px] rounded-lg bg-dark_gray mb-3">
          <input
            type="text"
            className="outline-none select-none w-full h-full px-6 bg-transparent text-white"
            placeholder="Name"
          />
        </div>
        <div className="w-full h-[60px] rounded-lg bg-dark_gray mb-3">
          <input
            type="email"
            className="outline-none select-none w-full h-full px-6 bg-transparent text-white"
            placeholder="Email"
          />
        </div>
        <div className="w-full h-[200px] rounded-lg bg-dark_gray mb-3">
          <textarea
            type="text"
            className="outline-none select-none w-full h-full px-6 py-4 bg-transparent text-white resize-none"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="w-fit text-white text-base md:text-lg bg-secondary mx-auto mt-2 sm:mt-4 px-5 py-2 rounded-lg border-2 border-secondary flex items-center justify-center gap-4 hover:cursor-pointer">
        Send me a message
      </div>
    </div>
  );
}

export default Contact;
