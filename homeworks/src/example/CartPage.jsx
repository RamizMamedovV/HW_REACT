import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
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
          <Link to="/" > Вернуться к товарам </Link>
        </div>
      ) : (
        <>
          <ul >
            {cartItems.map(item => (
              <li key={item.id} >
                <div>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ margin: 0 }}>${item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '20px' }}>
            <h2>Итого: ${total}</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Link to="/" >Продолжить покупки</Link>
              <button >Оформить заказ </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;