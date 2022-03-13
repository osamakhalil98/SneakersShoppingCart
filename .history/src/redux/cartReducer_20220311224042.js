import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalItems: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.totalItems > 0) {
        state.totalItems = action.payload;
      }
    },
  },
});
