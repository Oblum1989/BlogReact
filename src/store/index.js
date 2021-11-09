import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartShop/cart-slice";
import uiSlice from "./slices/CartShop/ui-slice";

const reducer = {
  ui: uiSlice.reducer,
  cart: cartSlice.reducer
}

const store = configureStore({
  reducer,
})


export default store