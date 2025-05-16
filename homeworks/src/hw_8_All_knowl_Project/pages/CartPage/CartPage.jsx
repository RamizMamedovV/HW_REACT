import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/reducers/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ваша корзина</h1>
      
      {cartItems.length === 0 ? (
        <div>
          <p>Корзина пуста</p>
          <Link to="/" style={{
            textDecoration: 'none',
            color: 'white',
            backgroundColor: '#007bff',
            padding: '10px 15px',
            borderRadius: '4px',
            display: 'inline-block',
            marginTop: '10px'
          }}>
            Вернуться к товарам
          </Link>
        </div>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #eee'
              }}>
                <div>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: 0 }}>${item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '20px' }}>
            <h2>Итого: ${total}</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Link to="/" style={{
                textDecoration: 'none',
                color: 'white',
                backgroundColor: '#6c757d',
                padding: '10px 15px',
                borderRadius: '4px'
              }}>
                Продолжить покупки
              </Link>
              <button style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Оформить заказ
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;