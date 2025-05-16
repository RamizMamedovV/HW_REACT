import { createSlice } from '@reduxjs/toolkit';
import data from './data.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: data
  },
  reducers: {}
});

export default productsSlice.reducer;