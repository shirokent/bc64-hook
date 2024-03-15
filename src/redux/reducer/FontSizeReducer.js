import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fsize: 16,
};

const FontSizeReducer = createSlice({
  name: "FontSizeReducer",
  initialState,
  reducers: {},
});

export const {} = FontSizeReducer.actions;

export default FontSizeReducer.reducer;
