import { useContext, useState } from "react";
import PokemonContext from "../../../../context/pokemons";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import styles from "./index.module.css";

export default function Cart({ onHideCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://react-blog-6ce8f-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartContext.items
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartContext.clearCart()
  }

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

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onHideCart} />}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order Data...</p>
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order...</p>
      <div className={styles.actions}>
      <button className={styles.button} onClick={onHideCart}>
        Close
      </button>
    </div>
    </>
  )

  return (
    <Modal onClick={onHideCart}>
      { !isSubmitting && !didSubmit && cartModalContent}
      { isSubmitting && isSubmittingModalContent }
      { didSubmit && didSubmit &&  didSubmitModalContent }
    </Modal>
  );
}
