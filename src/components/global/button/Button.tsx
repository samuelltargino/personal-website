import React from "react";
import "./Button.scss";

interface ButtonProps {
  event?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  link?: string;
  target?: string;
  className?: string;
  disabled?: boolean;
  text?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

function Button(props: ButtonProps) {
  const Icon = props.icon;
  return (
    <a href={props.link} target={props.target}>
      <button
        type={props.type}
        className="button"
        data-aos={"fade-up"}
        onClick={props.event}
        disabled={props.disabled}
      >
        {props.text}
        <div className="icon">
          <Icon className={props.className}></Icon>
        </div>
      </button>
    </a>
  );
}

export default Button;
