import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import "./index.css";

export default function CartShop() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
