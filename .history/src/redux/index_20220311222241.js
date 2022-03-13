import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemReducer";
const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;
