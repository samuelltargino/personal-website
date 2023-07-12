import { useState, useEffect, useRef } from "react";
import Header from "../components/global/header/Header";
import Hero from "../components/homepage/hero/Hero";
import Works from "../components/homepage/works/Works";
import About from "../components/homepage/about/About";
import Contact from "../components/homepage/contact/Contact";
import BackToTop from "../components/global/backToTop/BackToTop";
import AOS from "../aos";
import "../styles/Body.scss";
import "../styles/Main.scss";
import { useWindowSize } from "../hooks/useWindowSize";
import { useIconClass } from "../hooks/useIconClass";
import { IconClassContextProvider } from "../contexts/IconClassContext";
AOS.init();

const Homepage = () => {
  const mainRef = useRef(null);
  const { windowSize } = useWindowSize();
  const { iconClass, setIconClass } = useIconClass();

  function handleExpandMenu(element: string) {
    if (iconClass === "closed" && windowSize.width < 1440) {
      setIconClass("open");
    } else if (iconClass === "open" && windowSize.width < 1440) {
      setIconClass("closed");
    }
  }

  return (
    <div className="container">
      <header id="top-of-page">
        <Header handleExpandMenu={handleExpandMenu}></Header>
        <Hero handleExpandMenu={handleExpandMenu}></Hero>
      </header>
      <main ref={mainRef}>
        <About></About>
        <Works></Works>
        <Contact></Contact>
      </main>
      <BackToTop reffer={mainRef} windowSize={windowSize.width} />
    </div>
  );
};

export default Homepage;
