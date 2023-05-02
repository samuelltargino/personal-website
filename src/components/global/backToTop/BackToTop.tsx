import React, { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";
import "./BackToTop.scss";

type BackToTopProps = {
  reffer: React.RefObject<HTMLElement>;
  windowSize: number;
};

const BackToTop = (props: BackToTopProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    props.windowSize < 1300 ? setIsResponsive(true) : setIsResponsive(false);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(!entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    );
    props.reffer.current && observer.observe(props.reffer.current);

    return () => observer.disconnect();
  }, [props.reffer]);

  return (
    <div
      className={
        isResponsive ? "back-to-top back-to-top-responsive" : "back-to-top"
      }
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault;
        window.scrollTo(0, 0);
      }}
    >
      <button
        className={isHidden ? "back-to-top-icon hidden" : "back-to-top-icon"}
        title="Voltar ao topo"
      >
        <ArrowUp />
      </button>
      <span
        className={
          isResponsive ? "back-to-top-text" : "back-to-top-text hidden"
        }
      >
        Voltar ao topo
      </span>
    </div>
  );
};

export default BackToTop;
