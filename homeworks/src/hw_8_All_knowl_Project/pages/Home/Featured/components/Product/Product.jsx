import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../../../store/reducers/cartSlice';
import './Product.css';
import { CartIcon } from './icon/CartIcon';
import img1 from './images/product_1_1.png';
import img2 from './images/product_1_2.png';
import img3 from './images/product_1_3.png';
import img4 from './images/product_2_1.png';
import img5 from './images/product_2_2.png';
import img6 from './images/product_2_3.png';

function Product() {

    const imageMap = {
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
    };

    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();
    return (
        <div className="feature_grid">
            {products.map(product => (
                <div key={product.id} className="feature_item">
                    <img className="feature_item_img"
                        src={imageMap[product.img]} alt="photo1" />
                    <button className="feature_item_but" onClick={() => dispatch(addToCart(product))}>
                        <CartIcon />
                        {product.button}
                    </button>
                    <div className="feature_txt">
                        <h5 className="feature_h5">{product.h5}</h5>
                        <p className="feature_item_p">{product.item_p}</p>
                        <h5 className="feature_price">${product.price}.00</h5>
                    </div>


                </div>
            ))}

        </div>

    );
}

export default Product