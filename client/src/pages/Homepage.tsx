import { useState, useEffect, useRef } from "react";
import Header from "../components/global/header/Header";
import Hero from "../components/homepage/hero/Hero";
import Works from "../components/homepage/works/Works";
import About from "../components/homepage/about/About";
import Contact from "../components/homepage/contact/Contact";
import BackToTop from "../components/global/backToTop/BackToTop";
import AOS from "../aos";
import { useWindowSize } from "../hooks/useWindowSize";
import { useIconClass } from "../hooks/useIconClass";
import { useResponsive } from "../hooks/useResponsive";
import "../styles/Body.scss";
import "../styles/Main.scss";
AOS.init();

const Homepage = () => {
  const mainRef = useRef(null);
  const { windowSize } = useWindowSize();
  const { iconClass, setIconClass } = useIconClass();
  const { isResponsive } = useResponsive();

  return (
    <div className="container">
      <header id="top-of-page">
        <Header />
        <Hero />
      </header>
      <main ref={mainRef}>
        <About />
        <Works />
        <Contact />
      </main>
      <BackToTop reffer={mainRef} windowSize={windowSize.width} />
    </div>
  );
};

export default Homepage;
