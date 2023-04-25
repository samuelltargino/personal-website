import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Hero from "./pages/homepage/hero/Hero";
import About from "./pages/homepage/about/About";
import Works from "./pages/homepage/works/Works";
import Contact from "./pages/homepage/contact/Contact";

import AOS from "./aos";

// eslint-disable-next-line
import "./styles/styles.scss";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  const screenSizes = useWindowSize();

  const [iconClass, setIconClass] = useState("closed");

  function handleExpandMenu(element:string) {
    if (iconClass === "open" && screenSizes.width < 1440) {
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
    if (screenSizes.width >= 1300 && iconClass === "open") {
      setIconClass("closed");
    }
  }, [screenSizes.width, iconClass]);

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
