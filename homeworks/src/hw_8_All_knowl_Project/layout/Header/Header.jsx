import React from 'react';
import { SearchIcon } from './assets/icons/SearchIcon';
import { Logo } from './common/Logo';
import { UserIcon } from './assets/icons/UserIcon';
import { CartIcon } from './assets/icons/CartIcon';
import { BurgerIcon } from './assets/icons/BurgerIcon';
import styles from './Header.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import CartPage from '../../pages/CartPage/CartPage';


function Header() {
    return (
        <BrowserRouter>
            <div className={`${styles.header} ${styles.center}`}>
                <header>
                    <div className={`${styles.header_logo}`}>
                        <Link to="/" > <Logo /> </Link>
                        
                        <SearchIcon />
                    </div>
                    <nav className={`${styles.header_nav}`}>

                        <BurgerIcon />

                        <UserIcon />

                        <Link to="/cart" > <CartIcon /> </Link>
                        
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>

    );
}

export default Header;