import React from 'react'
import { useSidebarNavVisibility } from '../contexts/SidebarNavVisibilityContext'

const navItemCss = 'text-white text-lg select-none'

function SidebarNav() {
  const { toggleSidebar } = useSidebarNavVisibility()

  const scrollToSection = (sectionName) => {
    toggleSidebar()
    document.getElementById(sectionName).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="md:hidden fixed top-0 w-screen h-screen z-20">
      <div
        className="w-full h-full bg-transparent_gray bg-opacity-20 backdrop-blur-md pointer-events-auto"
        onClick={toggleSidebar}
      ></div>
      <div className="w-full h-full absolute top-0 grid grid-cols-[1fr_3fr] pointer-events-none">
        <div>
          <img src="/images/logo.svg" className="w-[60%] ml-4 mt-6" />
        </div>
        <div className="w-full h-full bg-black_alt pointer-events-auto py-10 px-12">
          <img
            src="/images/icons/close.svg"
            className="w-6 mr-0 ml-auto"
            onClick={toggleSidebar}
          />
          <nav className="flex gap-7 flex-col mt-14">
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
            <span
              className={navItemCss}
              onClick={() => scrollToSection('contactMe')}
            >
              Contact
            </span>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/portfoliosite-9335f.appspot.com/o/Shehriyar-Shariq.pdf?alt=media&token=5185d01f-8e62-46a7-b8d1-475010af2e66"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full text-secondary text-sm whitespace-nowrap px-6 py-3 rounded-xl border-[2px] border-secondary flex items-center justify-center">
                Download Resume
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SidebarNav
