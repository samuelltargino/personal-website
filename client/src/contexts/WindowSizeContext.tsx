import { ReactNode, createContext, useEffect, useState } from "react";

export const WindowSizeContext = createContext({
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  setWindowSize: (value: { width: number; height: number }) => {},
});

interface WindowSizeContextProps {
  children: ReactNode;
}

export const WindowSizeContextProvider = ({
  children,
}: WindowSizeContextProps) => {
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

  return (
    <WindowSizeContext.Provider value={{ windowSize, setWindowSize }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
