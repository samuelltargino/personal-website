  import React, { Component } from "react";
  import { Menu } from "react-feather";
  import Theme from "../theme/Theme";
  import "../../styles/styles.scss";

  interface HeaderProps{
    classKey: string,
    handleExpandMenu: (element:string) => void,
  }


  function Header(props:HeaderProps) {

  
    function handleCallIconName(
      event:React.MouseEvent<SVGElement, MouseEvent>
      ) {
      // const element = event.target.nodeName  
      const element = (event.target as SVGElement).nodeName  
      props.handleExpandMenu(element);
    }

    return (
      <div className="header">
        <div className="logo">
          <svg
            width="88"
            height="76"
            viewBox="0 0 88 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.6728 57.0248L26.995 25.9502L11.7339 16.092L87.2921 0L85.4557 10.8866L38.7273 20.3318L36.7585 20.7099L58.1339 33.4241L79.5092 46.1383L77.6728 57.0248Z"
              fill=""
            />
            <path
              d="M9.61929 18.9752L60.2971 50.0498L75.5582 59.908L0 76L1.83641 65.1134L48.5649 55.6682L50.5336 55.2901L7.78288 29.8617L9.61929 18.9752Z"
              fill=""
            />
          </svg>
        </div>

        <Menu
          className={props.classKey}
          onClick={handleCallIconName}
          size="40"
        ></Menu>

        <Theme className="theme-mode --header"></Theme>
      </div>
    );
  }

  export default Header;

  // status={themeMode}
