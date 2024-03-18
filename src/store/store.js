import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice.js";
import counterReducer from "./counterSlice.js";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
