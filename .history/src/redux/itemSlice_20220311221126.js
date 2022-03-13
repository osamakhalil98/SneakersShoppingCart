import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0 };

const itemSlice = createSlice({
  name: "item",
  initialState,
});
