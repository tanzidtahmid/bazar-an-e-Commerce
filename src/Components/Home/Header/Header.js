import React from 'react';
import Navbar from '../Navbar/Navbar';
import Carosol1 from '../../../images/Carousel/Carousel.png';
import Carosol2 from '../../../images/Carousel/Carousel2.png';
import Carosol3 from '../../../images/Carousel/Carousel3.png';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className='row header-container pt-2'>
            <div className='col-md-3'>
                <ul className='ul-items ml-1 ml-sm-1 ml-md-5 ml-xl-5 ml-xxl-5'>
                    <li> <Link to='/building' className='text-dark'> Security Safe </Link> </li>
                    <li> <Link to='/building' className='text-dark'> Home Appliance </Link> </li>
                    <li> <Link to='/building' className='text-dark'> Fashion For Men </Link> </li>
                    <li> <Link to='/building' className='text-dark'> Fashion For Women </Link> </li>
                    <li> <Link to='/building' className='text-dark'> Home & Living </Link> </li>
                </ul>
            </div>

            <div className=' col-md-9 carousrel-container'>
                <div className = 'carousrel-items'>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Carosol1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Carosol2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Carosol3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;