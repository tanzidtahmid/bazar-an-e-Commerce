import React from 'react';
import { faBell, faEnvelope, faPhoneAlt, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch()
    const {products, totalPrice,totalQuantities} = useSelector(state=>state.CartReducer);
    console.log(products, totalPrice,totalQuantities)
    return (
        <div>
        <div className=' bg-light up-nav d-flex'>
            <p className='py-1'><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> 45678987654567</p>
            <p className='py-1 pl-3'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> test.test@test.com</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white btn-nav">
            <div className="container-fluid">
                <h2><Link to='/'>Bazar</Link></h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex nav-search">
                        <input className="form-control me-2 nav-input" type="search" placeholder="Search" aria-label="Search" />
                        <button className=" nav-button" type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </button>
                    </form>
                    {/* dispatch({type:'OPEN_CART',payload: true}) */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item navbar-item shadow" onClick={() =>dispatch({type:'OPEN_CART',payload: true})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-dash" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </li>
                            <span className='quantities'>{totalQuantities}</span>
                        <li className="nav-item navbar-item shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </li>
                        <li className="nav-item dropdown navbar-item shadow">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            </svg>
                        </li>
                        <Link className='text-dark' to='/logIn'>
                        <li className="nav-item navbar-item shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <div className='row card-lists pt-3 bg-dark text-white'>
                <div className='col-md-3 d-flex justify-content-center '>
                    <p>All Catagories</p>
                </div>
                <div className='col-md-9 d-flex justify-content-around '>
                    <p>All Shpos</p>
                    <p>Gift Cards</p>
                    <p> Capmaings</p>
                    <p>Top-Up</p>
                    <p>Express</p>
                    <p>NewsFeed</p>
                    <p>Log In</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;