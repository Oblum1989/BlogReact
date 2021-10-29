import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import PokemonContext from "../../../../context/pokemons";

export default function HeaderCartButton({onClick}) {
  const {cartContext} = useContext(PokemonContext)

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
