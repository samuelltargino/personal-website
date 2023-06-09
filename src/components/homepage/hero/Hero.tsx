import Button from "../../global/button/Button";
import Menu from "../../global/menu/Menu";
import { ChevronRight } from "react-feather";
import "./Hero.scss";
interface HeaderProps {
  classKey: string;
  handleExpandMenu: (element: string) => void;
}

function Hero(props: HeaderProps) {
  const menuClass = props.classKey;

  return (
    <div className="hero">
      <div className="hero__intro">
        <div className="hero__intro__text">
          {/* <label className="hero__intro__tag">desenvolvimento de ui</label> */}
          <h1 className="hero__intro__title">
            Transformando ideias em interfaces
          </h1>
          <p className="hero__intro__text">
            Transformando a complexidade em simplicidade para melhorar a
            experiência do usuário
          </p>
          <Button
            text={"fale conosco"}
            link={"#contact"}
            icon={ChevronRight}
          ></Button>
          <div className="hero__line__container">
            <div className="divider line" data-aos="fill-in"></div>
          </div>
        </div>
        <Menu
          classKey={menuClass + "-menu"}
          handleExpandMenu={props.handleExpandMenu}
        ></Menu>
      </div>
    </div>
  );
}

export default Hero;
