import React from "react";
import Theme from "../theme/Theme";
import "./Menu.scss";
import { useIconClass } from "../../../hooks/useIconClass";

interface MenuProps {
  resourcesPageClassName?: string;
}

function Menu(props: MenuProps) {
  const { setIconClass } = useIconClass();
  const links = [
    {
      href: "#about",
      text: "Sobre mim",
    },

    {
      href: "#projects",
      text: "Projetos",
    },

    {
      href: "/recursos",
      text: "Recursos",
    },

    {
      href: "#contact",
      text: "Contato  ",
    },
  ];

  const checkHandleEvent = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const windowSize = window.innerWidth;

    if (windowSize < 1300) {
      const href = event.currentTarget.href;

      setTimeout(() => {
        window.location.href = href;
      }, 400);
      setIconClass("closed");
      document.body.style;
    } else {
      window.location.href = event.currentTarget.href;
    }
  };

  return (
    <ul className={"menu__links " + props.resourcesPageClassName}>
      {links.map((item, index) => (
        <li className="menu__link" key={index}>
          <a
            key={index}
            onClick={checkHandleEvent}
            className="menu__link__item"
            href={item.href}
          >
            {item.text}
          </a>
        </li>
      ))}
      <li className="theme">
        <Theme className="theme-mode --menu"></Theme>
      </li>
    </ul>
  );
}

export default Menu;
