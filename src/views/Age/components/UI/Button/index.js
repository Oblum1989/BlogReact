import styles from "./index.module.css";

export default function Button({ children, className, type, onClick }) {
  return (
    <button
      type={type || "button"}
      className={`${className} ${styles.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
