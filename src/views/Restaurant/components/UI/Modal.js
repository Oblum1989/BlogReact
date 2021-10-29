import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onClick}) => {
  return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal({ children, onClick}) {
  return (
    <>
      <Backdrop onClick={onClick} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
}
