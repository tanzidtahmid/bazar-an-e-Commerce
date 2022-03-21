import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Cart.css'
import { faMinus, faPlus, faTrashAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react/cjs/react.development';

const Cart = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    const { products, totalPrice, totalQuantities,cart } = useSelector(state => state.CartReducer);
    console.log(products, totalPrice, totalQuantities,cart)




    const handleProceed = () => {
        history.push('/orderProceed')
    }

    const handleCancle = () =>{
        dispatch({type:'CANCLE_CART',payload: false})
    }
    return (
        <div className='cart-container'>
            <FontAwesomeIcon icon={faWindowClose} onClick={()=>handleCancle()}></FontAwesomeIcon>
            {
                products.length == 0 ? "You Cart is Empty" : products.map(productsList => <div>
                    <div className='d-flex'>
                        <div>
                            <img className='cart-img mr-3' src={`data:image/jpeg;base64,${productsList.image.img}`} alt="" />
                        </div>
                        <div className='mx-3 '>
                            <p className='m-0'><small><b>{productsList.title}</b></small></p>
                            <p className='mb-0'><small><b>Size: {productsList.size}, Color:{productsList.color}</b></small></p>
                            <div className='mt-0 d-flex justify-content-around' style={{ border: "2px solid", padding: "3px 5px", width: '104px' }}>
                                <button style={{ border: '0', color: 'white', backgroundColor: '#17a2b8' }} onClick={() => dispatch({ type: 'DEC', payload: productsList._id })}> <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </button>
                                {productsList.quantity}
                                <button style={{ border: '0', color: 'white', backgroundColor: '#17a2b8' }} onClick={() => dispatch({ type: 'INC', payload: productsList._id })}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </button>
                            </div>
                            <p className='mt-0'><small><b>${productsList.price} x {productsList.quantity}</b></small></p>
                        </div>
                        <button className='btn btn-primary delete-btn' onClick={() => dispatch({ type: 'REMOVE', payload: productsList._id })}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon> </button>
                    </div>

                </div>)
            }
            <div className='d-flex justify-content-between'>
                <h6>Subtotal:</h6>
                <h6>{totalPrice}</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Total:</h6>
                <h6>{totalPrice}</h6>
            </div>
            <div className='order-proceed d-flex align-items-end justify-content-center'>
                <button className='btn btn-primary order-proceed-btn' onClick={() => handleProceed()}>Order Proceed</button>
            </div>
        </div>
    );
};

export default Cart;