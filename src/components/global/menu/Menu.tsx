import React from "react";
import Theme from "../theme/Theme";
import "./Menu.scss";

interface MenuProps {
  classKey: string;
  handleExpandMenu: (element: string) => void;
}

function Menu(props: MenuProps) {
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
      href: "#a",
      text: "Recursos",
    },

    {
      href: "#a",
      text: "Blog",
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
      props.handleExpandMenu("open");
    } else {
      window.location.href = event.currentTarget.href;
    }
  };

  return (
    <div className={props.classKey}>
      <ul className="menu__links">
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
    </div>
  );
}

export default Menu;
