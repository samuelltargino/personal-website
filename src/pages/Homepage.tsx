import { useState, useEffect } from "react";
import Header from "../components/global/header/Header";
import Hero from "../components/homepage/hero/Hero";
import Works from "../components/homepage/works/Works";
import About from "../components/homepage/about/About";
import Contact from "../components/homepage/contact/Contact";
import AOS from "../aos";
import "../styles/styles.scss";
AOS.init();

const Homepage = () => {
  const [iconClass, setIconClass] = useState("closed");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  function handleExpandMenu(element: string) {
    if (iconClass === "open" && windowSize.width < 1440) {
      setIconClass("closed");
      document.body.style.overflowY = "auto";
    } else {
      if (element === "svg" || element === "line") {
        setIconClass("open");
        document.body.style.overflowY = "hidden";
      }
    }
  }

  useEffect(() => {
    if (windowSize.width >= 1300 && iconClass === "open") {
      setIconClass("closed");
    }
  }, [windowSize.width, iconClass]);

  return (
    <>
      <header>
        <Header
          classKey={iconClass}
          handleExpandMenu={handleExpandMenu}
        ></Header>
        <Hero handleExpandMenu={handleExpandMenu} classKey={iconClass}></Hero>
      </header>
      <main>
        <About></About>
        <Works></Works>
        <Contact></Contact>
      </main>
    </>
  );
};

export default Homepage;
