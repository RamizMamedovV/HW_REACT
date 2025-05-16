import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    total: 0, 
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.total += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        state.total -= product.price;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;