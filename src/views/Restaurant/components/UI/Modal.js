import classes from "./Modal.module.css";

export default function Modal({ children, className }) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}
