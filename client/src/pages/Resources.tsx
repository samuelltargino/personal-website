import Header from "../components/global/header/Header";
import ResponsiveMenu from "../components/global/menu/responsiveMenu/ResponsiveMenu";
import { useResponsive } from "../hooks/useResponsive";
import "../styles/Body.scss";
import "../styles/Main.scss";

const Resources = () => {
  const { isResponsive } = useResponsive();

  return (
    <div className="container">
      <Header />
      {isResponsive && <ResponsiveMenu />}
    </div>
  );
};

export default Resources;
