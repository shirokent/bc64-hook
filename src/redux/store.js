import { configureStore } from "@reduxjs/toolkit";
import FontSizeReducer from "./reducer/FontSizeReducer";

export const store = configureStore({
  // state của toàn bộ ứng dụng
  reducer: {
    fsizeReducer: FontSizeReducer,
  },
});
