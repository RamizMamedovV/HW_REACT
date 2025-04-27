import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Product Catalog</h1>
        <AddProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;