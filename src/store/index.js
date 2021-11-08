import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/CartShop/ui-slice";

const reducer = {
  ui: uiSlice.reducer,
}

const store = configureStore({
  reducer,
})


export default store