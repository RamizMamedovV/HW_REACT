import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, available: true },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, available: false }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.items.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    }
  }
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;