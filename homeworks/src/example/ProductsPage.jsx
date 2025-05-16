import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { Link } from 'react-router-dom';


const ProductsPage = () => {

  const products = useSelector(state => state.products.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список товаров</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{product.name}</h3>
            <p>Цена: ${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/cart" style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: '#28a745',
          padding: '10px 15px',
          borderRadius: '4px'
        }}>
          Перейти в корзину
        </Link>
      </div>
    </div>
  );
}

export default ProductsPage;


