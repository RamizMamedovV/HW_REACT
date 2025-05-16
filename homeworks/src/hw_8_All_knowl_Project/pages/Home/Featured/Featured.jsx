import React from 'react';
import './Featured.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import BrowseLink from './components/BrowseLink/BrowseLink';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../store/reducers/cartReducer';

function Featured() {
    return (
        <section className='center'>
            <Header />
            <Product />
            <BrowseLink />

        </section>
    );
}

export default Featured;