import React from 'react';
import style from'./Subscribe.module.css';
import woman from'./img/woman.png';

function Subscribe() {
    return (
        <div className={style.subscribe}>

            <div className={style.subscribe_left}>
                <img className={style.subscribe_left_img} src={woman} alt="" />
                <p className={style.subscribe_left_p}>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                    condimentum“</p>
            </div>

            <div className={style.subscribe_right}>
                <h2 className={style.subscribe_right_h2}>SUBSCRIBE</h2>
                <h4 className={style.subscribe_right_h4}>FOR OUR NEWLETTER AND PROMOTION</h4>
                <form action="#">
                    <div className={style.subscribe_form_div}>
                        <input className={style.subscribe__input} placeholder="Enter Your Email" type="email" />
                        <button className={style.subscribe__btn} type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;