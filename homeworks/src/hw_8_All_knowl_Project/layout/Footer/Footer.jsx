import React from 'react';
import { FacebookIcon } from'./icon/FacebookIcon';
import { InstagramIcon } from'./icon/InstagramIcon';
import { KakayatofignyaIcon } from'./icon/KakayatofignyaIcon';
import { TwitterIcon } from'./icon/TwitterIcon';
import style from './Footer.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
        <h3 className={style.footer_h3}>© 2022 Brand All Rights Reserved.</h3>
        <div className={style.footer_socials}>
            <div className={style.footer_box}>
                <FacebookIcon />
            </div>
            <div className={style.footer_box}>
                <InstagramIcon />
            </div>
            <div className={style.footer_box}>
                <KakayatofignyaIcon />
                
            </div>
            <div className={style.footer_box}>
                <TwitterIcon />
                
            </div>
        </div>
    </footer>
    );
}

export default Footer;