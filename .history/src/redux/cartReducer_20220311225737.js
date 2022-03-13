import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalItems: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.totalItems = action.payload;
    },

    remove: (state, action) => {
      state.totalItems = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
