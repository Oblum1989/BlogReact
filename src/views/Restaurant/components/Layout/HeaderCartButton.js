import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../../../../context/pokemons";

export default function HeaderCartButton({onClick}) {
  const {cartContext} = useContext(PokemonContext)
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const {items} = cartContext

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
