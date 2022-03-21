import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPhoneAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';

const SingleManPdInfo = ({ productInfo }) => {
    const dispatch = useDispatch()
    
    const { cart } = useSelector(state => state.CartReducer);
    console.log(cart)
    const [isTrue, setIsTrue] = useState(false)
    // const [cart, setCart] = useState(false);
    let [quantity, setQuantity] = useState(1)
    let [pdDetails, setPdDetails] = useState({ color: '', size: '', quantities: quantity })

   
        

    const detailAboutProduct = e => {
        setQuantity(parseInt(e.target.value))
    }
    const detailAboutProducts = e => {
        const newPdDetails = { ...pdDetails }
        newPdDetails[e.target.name] = e.target.value;
        console.log(quantity)
        newPdDetails.quantities = quantity;
        setPdDetails(newPdDetails)
    }
    console.log(pdDetails)
    const addToCart = () =>{
        dispatch({ type: 'ADD_TO_CART', paylod: { productInfo, pdDetails } });
        dispatch({type:'OPEN_CART',payload: true})
        
    }
    return (
        <div>
            <div>
                {cart == true && <Cart id={productInfo._id}></Cart>}
            </div>
            <div className='p-5' style={{ backgroundColor: '#f7f8fa' }}>
                <div className='row shadow rounded Single-man-pd-container'>
                    <div className='col-md-4 bg-white'>
                        <img className='img-fluid ' src={`data:image/jpeg;base64,${productInfo.image.img}`} alt="" />
                    </div>
                    <div className='col-md-4 bg-white'>
                        <h4>{productInfo.title}</h4>
                        <p>Catagoary : {productInfo.catagoary}</p>
                        <h4>$ {productInfo.price}</h4>
                        <p><small>Starting price</small></p>

                        <div className='d-flex justify-content-around flex-wrap'>
                            <div
                            //  className='col-md-4'
                             >
                                <h6> Quantity:</h6>
                                <select class="form-select px-4 py-2" name='quantity' aria-label="Default select example" onChange={detailAboutProduct}>

                                    <option>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            {( productInfo.catagoary == 'Fashion for Men') &&
                            <div
                            //  className='col-md-4 '
                             >
                                <h6> Size:</h6>
                                <select class="form-select px-4 py-2" name='size' aria-label="Default select example" onChange={detailAboutProducts} >
                                    <option>Select</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>}
                            <div
                            //  className='col-md-4 ' 
                             onChange={detailAboutProducts}>
                                <h6> Color:</h6>
                                <select class="form-select px-4 py-2" name='color' aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black">Black</option>
                                </select>
                            </div>
                            <div className='cart-button ml-3'>
                                <button className="btn btn-primary  my-2 ShopBtn" onClick={() => addToCart()}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Check Avilable Shop</button>
                            </div>
                            <hr />
                            <div className='py-4 ml-3 cart-button pr-4'>
                                <p><b>Have questions about this product (SKU: 0x7fd03)</b></p>
                                <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> 23454345434543</p>
                            </div>
                            {
                                isTrue === true && <h1>Please Select</h1>
                            }
                        </div>
                    </div>
                    <div className='col-md-4 warranty'>
                        <h3>Warranty</h3>
                        <h5><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> 100% Authentic</h5>
                    </div>
                </div>
            </div>

            <div className='mt-5 p-5'>
                <h3>Product details of {productInfo.title}</h3>
                <div>

                    <p style={{ whiteSpace: 'pre-wrap' }}>{productInfo.description}</p>
                </div>
            </div>



        </div>
    );
};

export default SingleManPdInfo;