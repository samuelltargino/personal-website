import React from "react";
// eslint-disable-next-line
import "../../styles/styles.scss";

interface ButtonProps {
  event?: React.MouseEventHandler<HTMLButtonElement>,
  type?: string;
  link?: string,
  text: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

function Button(props:ButtonProps) {
  const Icon = props.icon;
  return (
    <a href={props.link}>
      <button
      className="button"
      data-aos={"fade-up"}
      onClick={props.event}
      >
      {props.text}
      <div className="icon">
        <Icon></Icon>
      </div>
    </button></a>
  );
}

export default Button;
