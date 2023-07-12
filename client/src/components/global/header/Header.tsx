import React, { useEffect } from "react";
import { Menu } from "react-feather";
import Theme from "../theme/Theme";
import "./Header.scss";
import Logo from "../../../assets/icons/Logo";
import { useResponsive } from "../../../hooks/useResponsive";
import { useLocation } from "react-router-dom";
import { useIconClass } from "../../../hooks/useIconClass";
import MenuLinks from "../menu/Menu";

function Header() {
  const { isResponsive } = useResponsive();
  const { iconClass, handleExpandMenu } = useIconClass();

  return (
    <div className="header">
      <Logo />

      {useLocation().pathname === "/recursos" && !isResponsive && (
        <MenuLinks resourcesPageClassName={"--resources"} />
      )}

      {isResponsive && (
        <Menu className={iconClass} onClick={handleExpandMenu} size="40" />
      )}

      <Theme className="theme-mode --header"></Theme>
    </div>
  );
}

export default Header;
