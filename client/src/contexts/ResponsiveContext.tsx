import { ReactNode, createContext, useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const ResponsiveContext = createContext({
  isResponsive: false,
  setIsResponsive: (value: boolean) => {},
});

interface ResponsiveContextProps {
  children: ReactNode;
}

export const ResponsiveContextProvider = ({
  children,
}: ResponsiveContextProps) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const { windowSize } = useWindowSize();

  useEffect(() => {
    windowSize.width < 1300 ? setIsResponsive(true) : setIsResponsive(false);
  }, [windowSize.width]);

  return (
    <ResponsiveContext.Provider value={{ isResponsive, setIsResponsive }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
