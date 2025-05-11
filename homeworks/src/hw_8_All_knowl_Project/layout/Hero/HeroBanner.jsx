import React from 'react';
import heroBannerImg from'./images/heroBannerImg.png';
import styles from './HeroBanner.module.css';


function HeroBanner() {
    return (
        <section className={`${styles.hero} ${styles.center}`}>
            <img className={styles.hero_content_img} src={heroBannerImg} alt="hero_content_img" />
            <div className={styles.hero_content_txt} >
                <h1  className={styles.hero_h1} >THE&nbsp;BRAND</h1>{/* <br> */}
                <h2 className={styles.hero_h2} >OF&nbsp;LUXERIOUS&nbsp;<span className={`${styles.hero_h2} ${styles.color_txt}`}>FASHION</span>
                </h2>
            </div>
        </section>
    );
}

export default HeroBanner;