import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import productsReducer from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});

export default store;