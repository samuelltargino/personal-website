import { useContext } from "react";

import { ResponsiveContext } from "../contexts/ResponsiveContext";

export const useResponsive = () => useContext(ResponsiveContext);
