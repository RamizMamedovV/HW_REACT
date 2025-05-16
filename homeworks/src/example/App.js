import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Link to="/" > Товары </Link>
          <Link to="/cart" > Корзина </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;