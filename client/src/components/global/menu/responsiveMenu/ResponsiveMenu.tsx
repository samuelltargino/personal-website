import { useIconClass } from "../../../../hooks/useIconClass";
import Menu from "../Menu";

import "./ReponsiveMenu.scss";

const ResponsiveMenu = () => {
  const { iconClass } = useIconClass();
  return (
    <div className={iconClass + "-menu"}>
      <Menu />
    </div>
  );
};

export default ResponsiveMenu;
