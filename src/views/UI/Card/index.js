import React from "react";

import classes from "./index.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
