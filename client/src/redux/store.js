import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { busketReducer } from './slices/busket';
import { weightReducer } from './slices/weight';

const store = configureStore({
  reducer: {
    products: productsReducer,
    busket: busketReducer,
    weight: weightReducer,
  },
});
export default store;
