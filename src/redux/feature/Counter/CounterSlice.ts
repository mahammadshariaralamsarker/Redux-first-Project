import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Count: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.Count = state.Count + 1;
    },
    decreement: (state) => {
      state.Count = state.Count - 1;
    },
  },
});

export const { increment, decreement } = counterSlice.actions;

export default counterSlice.reducer;
