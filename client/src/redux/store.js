import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { busketReducer } from './slices/busket';

const store = configureStore({
  reducer: {
    products: productsReducer,
    busket: busketReducer,
  },
});
export default store;
