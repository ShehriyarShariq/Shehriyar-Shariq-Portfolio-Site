import React, { useState, useEffect } from "react";
import { useWindowScroll } from "../hooks/useWindowScroll";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
// import MyWork from "../components/MyWork";
// import MoreProjects from "../components/MoreProjects";
import BlogPosts from "../components/BlogPosts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import dynamic from "next/dynamic";

const MyWork = dynamic(() => import("../components/MyWork"), {
  ssr: false,
});

const MoreProjects = dynamic(() => import("../components/MoreProjects"), {
  ssr: false,
});

function PortfolioSite() {
  const scrollTop = useWindowScroll();
  const [isScrollToTopButtonVisible, setIsScrollToTopButtonVisible] =
    useState(false);

  // const handleScroll = () => {
  //   const fromTop = window.scrollY;
  //   if (fromTop > window.innerHeight && !isScrollToTopButtonVisible) {
  //     setIsScrollToTopButtonVisible(true);
  //   } else if (fromTop <= window.innerHeight && isScrollToTopButtonVisible) {
  //     setIsScrollToTopButtonVisible(false);
  //   }
  // };

  useEffect(() => {
    if (scrollTop > window.innerHeight && !isScrollToTopButtonVisible) {
      setIsScrollToTopButtonVisible(true);
    } else if (scrollTop <= window.innerHeight && isScrollToTopButtonVisible) {
      setIsScrollToTopButtonVisible(false);
    }
  }, [scrollTop]);

  useEffect(() => {}, [isScrollToTopButtonVisible]);

  return (
    <div className="w-full h-full relative z-10 flex flex-col gap-12 sm:gap-10">
      <div className="w-full md:h-screen grid grid-rows-[auto_1fr] gap-10 md:gap-0">
        <Nav />
        <Hero />
      </div>
      <About />
      <MyWork />
      <MoreProjects />
      <BlogPosts />
      <Contact />
      <Footer />
      {isScrollToTopButtonVisible ? <ScrollToTopBtn /> : <></>}
    </div>
  );
}

export default PortfolioSite;
