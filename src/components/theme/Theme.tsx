import React, { useEffect, useState } from "react";
import { Circle, Sun } from "react-feather";
import '../../styles/styles.scss'

interface ClassName {
  className: string;
}

const Theme = (props:ClassName) => {
  const isLightPreferred = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [themePreference] = useState(isLightPreferred ? "light" : "dark");

  const [chosenTheme, setChosenTheme] = useState(
    localStorage.getItem("theme-mode") || themePreference
  );
  const handleChangeThemeMode = () => {
    setChosenTheme((mode) => (mode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(chosenTheme);
    localStorage.setItem("theme-mode", chosenTheme);
  }, [chosenTheme]);

  return (
    <div className={props.className} onClick={handleChangeThemeMode}>
      {chosenTheme === "light" ? (
        <Circle className="moon" size={18}></Circle>
      ) : (
        <Sun className="sun" size={21}></Sun>
      )}
      <span>{chosenTheme === "light" ? "dark mode" : "light mode"}</span>
    </div>
  );
};

export default Theme;
