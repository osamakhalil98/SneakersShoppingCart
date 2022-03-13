import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalItems: 5 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.totalItems > 0) {
        state.totalItems = action.payload;
      } else {
        state.totalItems = 0;
      }
    },

    remove: (state, action) => {
      state.totalItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
