import { useContext, useState } from "react";
import PokemonContext from "../../../../context/pokemons";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import styles from "./index.module.css";

export default function Cart({ onHideCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const { cartContext } = useContext(PokemonContext);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  return (
    <Modal onClick={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && <Checkout onCancel={onHideCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}
