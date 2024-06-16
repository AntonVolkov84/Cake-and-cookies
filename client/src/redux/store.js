import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { busketReducer } from './slices/busket';
import { weightReducer } from './slices/weight';
import { authReducer } from './slices/auth';
import { registrationReducer } from './slices/registration';
import { reportReducer } from './slices/report';

const store = configureStore({
  reducer: {
    products: productsReducer,
    busket: busketReducer,
    weight: weightReducer,
    auth: authReducer,
    registration: registrationReducer,
    report: reportReducer,
  },
});
export default store;
