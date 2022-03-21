import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAws, faCcPaypal, faPaypal } from '@fortawesome/free-brands-svg-icons';
import './Payment.css'
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';
const stripePromise = loadStripe('pk_test_51Ie1yQAB3MxYj7vRiy7ITK44VjhCPkyvcvL0w34tGLsIG7EHEbKOmwVuZPtmy1dtuhafaCtOF0dasKnADjVARd2O004kSwUaXY');

const Payment = () => {
    const [isTrue, setIsTrue] = useState(false)
    const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer);
    const handleCreditCard = () => {
        setIsTrue(true)
    }
    return (
        <div className='grid row'>
        <div className='col-md-8'>
            <section>
                <h3 className='px-3  py-3 mx-5'>Payment With</h3>
                <div className='pay shadow rounded px-3  py-3 mx-5'>

                    <h2 className='input-fild'><input type="radio" className='redio' name="checkbox" /> <FontAwesomeIcon icon={faApple} size=''></FontAwesomeIcon> pay</h2>
                    <h2 className='input-fild'><input type="radio" className='redio' name="checkbox" /> <FontAwesomeIcon className='aws' icon={faAws} size=''></FontAwesomeIcon> pay</h2>
                    <h2 className='input-fild'><input type="radio" className='redio' name="checkbox" /> <FontAwesomeIcon className='paypal' icon={faPaypal} size=''></FontAwesomeIcon> <FontAwesomeIcon icon={faCcPaypal} className='ccPaypal' size=''></FontAwesomeIcon></h2>
                    <div className='input-fild'><h2><input type="radio" className='redio' name="checkbox" onClick={() => handleCreditCard()} /> Credit Card </h2>

                        {
                            isTrue && <div className=' d-flex justify-content-center align-items-center flex-column w-100 h-100 ' style={{ zIndex: 1 }}>
                                <div className='bg-whie shadow p-5 rounded'>
                                    <FontAwesomeIcon style={{ cursor: "pointer", color: 'black' }} onClick={() => setIsTrue(false)} icon={faTimes}></FontAwesomeIcon>
                                    <Elements stripe={stripePromise}>
                                        <SplitCardForm></SplitCardForm>
                                    </Elements>
                                </div>
                            </div>

                        }
                    </div>

                </div>
            </section>
        </div>
        <div className='col-md-4'>
            <h3 className='px-3  py-3 mx-5'>Order Summary</h3>
            <div className=' mx-5 px-3 my-3 py-3 bg-white shadow rounded proceed-item-three'>
                <div className='d-flex'>
                    <div>
                        <div className='d-flex  justify-content-between'>
                            <p><b> The Growing Supplier For Cash on Delivery Service : </b></p>
                            <p><b>{totalPrice}</b></p>
                        </div>
                        <div className='d-flex  justify-content-between'>
                            <p><b>Subtotal</b></p>
                            <p><b>{totalPrice}</b></p>
                        </div>
                        <div className='d-flex  justify-content-between'>
                            <p><b>Total </b></p>
                            <p><b>{totalPrice}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Payment;