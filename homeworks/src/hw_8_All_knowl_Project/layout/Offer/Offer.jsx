import React from 'react';
import styles from'./Offer.module.css';
import offer1_1 from'./imges/offer1_1.png';
import offer1_2 from'./imges/offer1_2.png';
import offer1_3 from'./imges/offer1_3.png';
import offer_big from'./imges/offer_big.png';


function Offer() {
    return (
        <section className={`${styles.offer} ${styles.center}`}>
            <div className={`${styles.offer_item}`}>
                <img src={offer1_1} alt="women" className={`${styles.offer_img}`} />
                <h4 className={`${styles.offer_txt_h4}`} >30% OFF {/*<br> */}<span className={`${styles.offer_txt_span} ${styles.color_txt}`}>FOR WOMEN</span></h4>
            </div>

            <div className={`${styles.offer_item}`} >
                <img src={offer1_2} alt="men" className={`${styles.offer_img}`} />
                <h4 className={`${styles.offer_txt_h4}`} >HOT DEAL{/*<br> */}<span className={`${styles.offer_txt_span} ${styles.color_txt}`} >FOR MEN
                </span>
                </h4>
            </div>

            <div className={styles.offer_item} >
                <img src={offer1_3} alt="kids" className={`${styles.offer_img}`} />
                <h4  className={`${styles.offer_txt_h4}`}>NEW ARRIVALS{/*<br> */}<span className={`${styles.offer_txt_span} ${styles.color_txt}`}>FOR KIDS</span>
                </h4>
            </div>

            <div className={`${styles.offer_item} ${styles.offer_big_item}`} >
                <img src={offer_big} alt="accesories" className={styles.offer_img} />
                <h4 className={styles.offer_txt_h4}>LUXIROUS & TRENDY{/*<br> */}<span className={`${styles.offer_txt_span} ${styles.color_txt}`}>ACCESORIES</span>
                </h4>
            </div>
        </section>
    );
}

export default Offer;