import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userContext } from '../../App';
import Cart from '../Cart/Cart';
import { faMinus, faMinusCircle, faPlus, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './OrderProceed.css'
import Navbar from '../Home/Navbar/Navbar';
import { useHistory } from 'react-router-dom';

const OrderProceed = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer);
    console.log(products, totalPrice, totalQuantities)
    const handleConfrim = () => {
        history.push("/ConfrimOrder")
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className='grid row proceed-main-container'>

                <div className='col-md-6 col-12 proceed-item '>
                    <h3 className='mx-5 mt-2 px-3'>Your Order</h3>
                    <div className='mx-5 px-3 my-4 py-2 bg-white shadow rounded proceed-item-three'>

                        {
                            products.map(product =>
                                <div className='d-flex flex-xs-row my-1 px-2  px-xxl-5 px-xl-5 px-md-5 px-sm-5' key={product._id}>
                                    <div>
                                        <img style={{ height: '150px', width: "150px" }} className='img-fluid' src={`data:image/jpeg;base64,${product.image.img}`} alt="" />
                                    </div>
                                    <div className='mx-3 proceed-item-one'>
                                        <p><small><b>{product.title}</b></small></p>
                                        <p><small><b>Size: {product.size}, Color: {product.color}</b></small></p>
                                        <p><small><b>${product.price} x {product.quantity}</b></small></p>
                                        <div className='mt-0 d-flex justify-content-around' style={{ border: "2px solid", padding: "3px 5px", width: '104px' }}>
                                            <button style={{ border: '0', color: 'white', backgroundColor: '#17a2b8' }} onClick={() => dispatch({ type: 'DEC', payload: product._id })}> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </button>
                                            {product.quantity}
                                            <button style={{ border: '0', color: 'white', backgroundColor: '#17a2b8' }} onClick={() => dispatch({ type: 'INC', payload: product._id })}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </button>
                                        </div>

                                    </div>

                                    <button className='btn btn-primary delete-btn mt-4' onClick={() => dispatch({ type: 'REMOVE', payload: product._id })}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className='col-md-6'>
                    <h3 className='mx-5 mt-2 px-3'>Order Summary</h3>
                    <div className=' mx-5 px-3 my-4 py-3 bg-white shadow rounded proceed-item-three'>
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
                        <button className="btn btn-primary" onClick={() => handleConfrim()}>Confrim Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProceed;