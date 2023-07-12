import { ReactNode, createContext, useEffect, useState } from "react";

export const IconClassContext = createContext({
  iconClass: "closed",
  setIconClass: (value: string) => {},
});

interface IconClassProviderProps {
  children: ReactNode;
}

export const IconClassContextProvider = ({
  children,
}: IconClassProviderProps) => {
  const [iconClass, setIconClass] = useState("closed");

  return (
    <IconClassContext.Provider value={{ iconClass, setIconClass }}>
      {children}
    </IconClassContext.Provider>
  );
};
