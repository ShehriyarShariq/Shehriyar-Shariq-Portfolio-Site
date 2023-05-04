import React from 'react'
import OverlappingCharacter from './OverlappingCharacter'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="w-full h-full pl-[15%] pr-[10%] md:pl-[12%] md:pr-[10%] lg:px-[12%] overflow-auto grid md:grid-cols-[auto_1fr] md:justify-between sm:items-center gap-4 sm:gap-10">
      <div>
        <div className="text-white text-lg sm:text-4xl mb-2 sm:mb-6">
          Hi, I am
        </div>
        <div className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-7 sm:mb-14">
          <span className="text-primary whitespace-nowrap">
            <OverlappingCharacter
              char="S"
              textSize=" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
            />
            hehriyar
          </span>
          <span className="text-primary whitespace-nowrap">
            <OverlappingCharacter
              char="S"
              textSize=" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
            />
            hariq.
          </span>
        </div>
        <div className="text-white text-2xl sm:text-4xl mb-6 sm:mb-12">
          A Full Stack Web/
          <br className="sm:hidden" />
          Mobile
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Developer
        </div>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/portfoliosite-9335f.appspot.com/o/Shehriyar-Shariq.pdf?alt=media&token=5185d01f-8e62-46a7-b8d1-475010af2e66"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row gap-4 sm:gap-8 group">
            <img
              src="/images/icons/github.svg"
              className="w-[30px] sm:w-[70px] group-hover:cursor-pointer"
            />
            <div className="w-fit text-secondary text-sm md:text-lg lg:text-xl xl:text-2xl px-7 sm:px-10 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-[2px] sm:border-[4px] border-secondary group-hover:bg-secondary_hovered group-hover:text-white group-hover:cursor-pointer flex items-center justify-center">
              <span className="hidden sm:block">Download My Resume</span>
              <span className="sm:hidden">Download Resume</span>
            </div>
          </div>
        </a>
      </div>
      {/* <img
        src="/images/me.png"
        className="w-[60%] md:w-[100%] xl:w-[70%] mx-auto pr-[5%] md:pr-0"
      /> */}
      <div
        className="w-[60%] md:w-[100%] xl:w-[50%] h-[250px] sm:h-[400px] md:h-full mx-auto pr-[5%] md:pr-0 relative"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <Image
          src="/images/me.webp"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}
