import React from 'react';
import EditProduct from './EditProduct';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../features/productSlice';
import '../index.css'

const ProductList = () => {
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Status: {product.available ? 'Available' : 'Out of stock'}</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <EditProduct product={product} />

                            <button style={{ margin: '5px' }} onClick={() => dispatch(toggleAvailability(product.id))}>
                                {product.available ? 'Set Out of stock' : 'Set Available'}
                            </button>
                            
                        </div>
                    </div>
                    <div>
                        <button onClick={() => dispatch(deleteProduct(product.id))}>
                            X
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ProductList;