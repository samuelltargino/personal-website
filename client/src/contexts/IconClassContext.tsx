import { ReactNode, createContext, useEffect, useState } from "react";
import { useResponsive } from "../hooks/useResponsive";

export const IconClassContext = createContext({
  iconClass: "closed",
  setIconClass: (value: string) => {},
  handleExpandMenu: () => {},
});

interface IconClassProviderProps {
  children: ReactNode;
}

export const IconClassContextProvider = ({
  children,
}: IconClassProviderProps) => {
  const [iconClass, setIconClass] = useState("closed");
  const { isResponsive } = useResponsive();

  function handleExpandMenu() {
    if (iconClass === "open" && isResponsive) {
      setIconClass("closed");
      document.body.style.overflowY = "auto";
    } else if (iconClass === "closed" && isResponsive) {
      setIconClass("open");
      document.body.style.overflowY = "hidden";
    }
  }

  useEffect(() => {
    !isResponsive && setIconClass("closed");
  }, [isResponsive]);

  return (
    <IconClassContext.Provider
      value={{ iconClass, setIconClass, handleExpandMenu }}
    >
      {children}
    </IconClassContext.Provider>
  );
};
