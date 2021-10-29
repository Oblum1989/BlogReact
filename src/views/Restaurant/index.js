import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";

export default function Restaurant() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return(
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  )
}