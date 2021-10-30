import { useContext } from "react";
import PokemonContext from "../../../../context/pokemons";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./index.module.css";

export default function Cart({ onHideCart }) {
  const { cartContext } = useContext(PokemonContext);
  const hasItems = cartContext.items.length > 0

  const cartItemRemoveHandler = id =>{
    cartContext.removeItem(id)
  }
  const cartItemAddHandler = item =>{
    cartContext.addItem({...item, amount:1})
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem key={item.id} {...item} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );
  return (
    <Modal onClick={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
