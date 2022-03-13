import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: { item: itemReducer, cart: cartReducer },
});

export default store;
