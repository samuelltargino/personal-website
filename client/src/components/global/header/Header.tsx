import React, { useEffect } from "react";
import { Menu } from "react-feather";
import Theme from "../theme/Theme";
import "./Header.scss";
import Logo from "../../../assets/icons/Logo";
import { useResponsive } from "../../../hooks/useResponsive";
import { useLocation } from "react-router-dom";
import MenuLinks from "../menu/Menu";
import { useIconClass } from "../../../hooks/useIconClass";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface HeaderProps {
  handleExpandMenu: (element: string) => void;
}

function Header(props: HeaderProps) {
  const { isResponsive, setIsResponsive } = useResponsive();
  const { iconClass, setIconClass } = useIconClass();
  const { windowSize } = useWindowSize();

  function handleCallIconName(event: React.MouseEvent<SVGElement, MouseEvent>) {
    const element = (event.target as SVGElement).nodeName;
    props.handleExpandMenu(element);
  }

  useEffect(() => console.log(iconClass), [iconClass]);

  useEffect(() => {
    windowSize.width < 1300 ? setIsResponsive(true) : setIsResponsive(false);
  }, [windowSize.width]);

  return (
    <div className="header">
      <Logo />

      {/*   {useLocation().pathname === "/recursos" && (
        <MenuLinks classKey={iconClass} />
      )}
 */}
      <Menu className={iconClass} onClick={handleCallIconName} size="40" />

      <Theme className="theme-mode --header"></Theme>
    </div>
  );
}

export default Header;
