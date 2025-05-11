import React from 'react';
import './Product.css';
import { CartIcon } from'./icon/CartIcon';
import img1 from'./images/product_1_1.png';
import img2 from'./images/product_1_2.png';
import img3 from'./images/product_1_3.png';
import img4 from'./images/product_2_1.png';
import img5 from'./images/product_2_2.png';
import img6 from'./images/product_2_3.png';

function Feature() {
    return ( 
        <div className="feature_grid">
            <div className="feature_item">
                <img className="feature_item_img" src={img1} alt="photo1"/>

                <button className="feature_item_but">
                    <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring, Australian
                        arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
            <div className="feature_item">
                <img className="feature_item_img item_1_2" src={img2} alt="photo1"/>
                <button className="feature_item_but">
                <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring, Australian
                        arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
            <div className="feature_item">
                <img className="feature_item_img" src={img3} alt="photo1"/>
                <button className="feature_item_but">
                <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring, Australian
                        arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
            <div className="feature_item">
                <img className="feature_item_img" src={img4} alt="photo1"/>
                <button className="feature_item_but">
                <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring,
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
            <div className="feature_item">
                <img className="feature_item_img" src={img5} alt="photo1"/>
                <button className="feature_item_but">
                <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring,
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
            <div className="feature_item">
                <img className="feature_item_img" src={img6} alt="photo1"/>
                <button className="feature_item_but">
                <CartIcon />
                    Add to Cart
                </button>
                <div className="feature_txt">
                    <h5 className="feature_h5">ELLERY X M'O CAPSULE</h5>
                    <p className="feature_item_p">Known for her sculptural takes on traditional tailoring,
                        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <h5 className="feature_price">$52.00</h5>
                </div>
            </div>
        </div>
     );
}

export default Feature