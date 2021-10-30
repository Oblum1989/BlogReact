import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ className, input, label }, ref) => {
  return (
    <div className={`${className} ${classes.input}`}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} {...input} ref={ref} />
    </div>
  );
});

export default Input;
