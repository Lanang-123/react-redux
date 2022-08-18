import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/ProdukSlice.js"

export const store = configureStore({
  reducer: {
    product:productReducer
  },
});
