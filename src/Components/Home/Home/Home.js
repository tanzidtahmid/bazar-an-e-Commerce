import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../Cart/Cart';
import FashionForMen from '../../FashionForMen/FashionForMen';
import HomeAppliance from '../../HomeAppliance/HomeAppliance';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    const { products, totalPrice, totalQuantities,cart } = useSelector(state => state.CartReducer);
    return (
        <div>
        {
            cart && <Cart></Cart>
        }
        <Header></Header>
        <FashionForMen></FashionForMen>
        <HomeAppliance></HomeAppliance>
        <Footer></Footer>
    </div>
    );
};

export default Home;