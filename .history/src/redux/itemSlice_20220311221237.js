import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0 };

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    increase: (state, action) => {
      if (state.value <= 0) {
        state.value = 1;
      } else {
        state.value += 1;
      }
    },
    decrease: (state, action) => {
      if (state.value <= 0) {
        state.value = 0;
      }
      state.value -= 1;
    },
  },
});
