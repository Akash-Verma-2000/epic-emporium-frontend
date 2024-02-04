import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // You can add more reducers here if needed
  },
});
