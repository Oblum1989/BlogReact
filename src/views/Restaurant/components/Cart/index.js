import Modal from "../UI/Modal";
import styles from "./index.module.css";

export default function Cart({onHideCart}) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
