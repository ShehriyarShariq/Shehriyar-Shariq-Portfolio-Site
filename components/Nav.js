import React, { useState, useEffect } from 'react'
import { useWindowScroll } from '../hooks/useWindowScroll'
import { useSidebarNavVisibility } from '../contexts/SidebarNavVisibilityContext'
import SidebarNav from './SidebarNav'

const navItemCss =
  'text-white text-xl hover:cursor-pointer hover:underline underline-offset-2 select-none'

export default function Nav() {
  const scrollTop = useWindowScroll()
  const { isSidebarVisible, toggleSidebar } = useSidebarNavVisibility()
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    if (scrollTop > 0 && !isSolid) {
      setIsSolid(true)
    } else if (scrollTop <= 0 && isSolid) {
      setIsSolid(false)
    }
  }, [scrollTop])

  useEffect(() => {}, [isSolid, isSidebarVisible])

  const scrollToSection = (sectionName) => {
    document.getElementById(sectionName).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header
        className={
          'h-[50px] sm:h-[120px] flex flex-row justify-between px-[8%] sm:px-[5%] mt-[20px] md:mt-[50px] items-center' +
          (isSolid
            ? ' w-full h-[90px] mt-[0px] py-[20px] md:py-0 md:mt-[20px] z-20 fixed top-0 bg-black_alt md:relative md:bg-transparent '
            : '')
        }
      >
        <img src="/images/logo.svg" className="h-full sm:h-3/4 select-none" />
        <nav className="hidden md:flex gap-14 flex-row items-center">
          <span
            className={navItemCss}
            onClick={() => scrollToSection('aboutMe')}
          >
            About
          </span>
          <span
            className={navItemCss}
            onClick={() => scrollToSection('myWork')}
          >
            Work
          </span>
          <span
            className={navItemCss}
            onClick={() => scrollToSection('myBlog')}
          >
            Blog
          </span>
          <button
            className="text-white text-xl px-5 py-2 bg-secondary rounded-lg transition-colors hover:bg-secondary_hovered select-none"
            onClick={() => scrollToSection('contactMe')}
          >
            Contact
          </button>
        </nav>
        <img
          src="/images/icons/menu.svg"
          className="h-1/2 md:hidden"
          onClick={() => toggleSidebar()}
        />
      </header>
      {isSidebarVisible ? <SidebarNav /> : <></>}
    </>
  )
}
