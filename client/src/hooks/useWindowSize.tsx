import { useContext } from "react";

import { WindowSizeContext } from "../contexts/WindowSizeContext";

export const useWindowSize = () => useContext(WindowSizeContext);
