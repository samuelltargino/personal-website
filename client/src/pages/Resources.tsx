import Header from "../components/global/header/Header";
import { useIconClass } from "../hooks/useIconClass";

const Resources = () => {
  return (
    <div className="container">
      <Header classKey={useIconClass().iconClass} />
    </div>
  );
};

export default Resources;
