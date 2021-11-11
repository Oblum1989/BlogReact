import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartShop/cart-slice";
import uiSlice from "./slices/CartShop/ui-slice";
import productSlice from "./slices/ProductsPage/product-slice";

const reducer = {
  ui: uiSlice.reducer,
  cart: cartSlice.reducer,
  shop: productSlice.reducer,
}

const store = configureStore({
  reducer,
})


export default store