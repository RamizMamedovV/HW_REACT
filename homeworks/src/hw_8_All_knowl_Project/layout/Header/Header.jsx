import React from 'react';
import { SearchIcon } from './assets/icons/SearchIcon';
import { Logo } from './common/Logo';
import { UserIcon } from './assets/icons/UserIcon';
import { CartIcon } from './assets/icons/CartIcon';
import { BurgerIcon } from './assets/icons/BurgerIcon';
import styles from './Header.module.css';


function Header() {
    return (
        <div>
            <header className={`${styles.header} ${styles.center}`}>
                <div className={`${styles.header_logo}`}>
                    <Logo />
                    <SearchIcon />

                </div>
                <nav className={`${styles.header_nav}`}>

                    <BurgerIcon />

                    <UserIcon />

                    <CartIcon />
                </nav>
            </header>
        </div>
    );
}

export default Header;