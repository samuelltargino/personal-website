import { useContext } from "react";

import { IconClassContext } from "../contexts/IconClassContext";

export const useIconClass = () => useContext(IconClassContext);
