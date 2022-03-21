import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { userContext } from '../../App';

const ConfrimOrder = () => {
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const history = useHistory()
    const email = localStorage.getItem('email')
    const [recipientInfo, setRecipient] = useState(
        {
            recipientName: '',
            phoneNo: '',
            email: signedInUser.email || email,
            city: '',
            area: '',
            address: '',

            status: 'Pending'
        })
    const [isTrue, setIsTrue] = useState(false);
    const dispatch = useDispatch();
    const { products, totalPrice, totalQuantities } = useSelector(state => state.CartReducer);
    console.log(products, totalPrice, totalQuantities);
    const handleChange = () => {
        setIsTrue(true);
    }
    console.log(isTrue)
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        const newRecipientInfoson = [recipientInfo];
        const jsonRecipientInfo = JSON.stringify(newRecipientInfoson);
        localStorage.setItem('recipientInfoson', jsonRecipientInfo)
        history.push('/Payment')

    }
    const handleBlur = (e) => {
        const newRecipientInfo = { ...recipientInfo };
        newRecipientInfo[e.target.name] = e.target.value;
        setRecipient(newRecipientInfo);
        console.log(newRecipientInfo);
    }
    const handleInfosubmit = (e) => {
        e.preventDefault();
        setIsTrue(false)
        console.log(recipientInfo)
        // console.log(e.target.name, e.target.value)
    }
    return (
        <div className='row proceed-main-container'>
        {
            isTrue && <div className='position-absolute d-flex justify-content-center align-items-start align-items-sm-center align-items-md-center align-items-xl-center align-items-xxl-center flex-column w-100 h-100 ' style={{ zIndex: 1 }}>
                <div className='bg-primary w-50 shadow p-0 p-sm-2 p-xl-5 p-xxl-5 rounded'>
                    <FontAwesomeIcon style={{ cursor: "pointer", color: 'white' }} onClick={() => setIsTrue(false)} icon={faTimes}></FontAwesomeIcon>
                    <form onSubmit={handleInfosubmit}>
                        <div class="mb-3 d-flex flex-wrap">
                            <div className='m-2'>
                                <label for="exampleFormControlInput1" className="form-label text-white">Recipient Name</label>
                                <input type="text" class="form-control" required name="recipientName" id="exampleFormControlInput1" onBlur={handleBlur} placeholder="Enter Recipient's Name" />
                            </div>
                            <div className='m-2'>
                                <label for="exampleFormControlInput1" class="form-label text-white">Phone No</label>
                                <input type="number" class="form-control" required id="exampleFormControlInput1" name='phoneNo' onBlur={handleBlur} placeholder="Enter Phone No" />
                            </div>
                        </div>
                        <div class="mb-3 d-flex flex-wrap">
                            <div className='m-2'>
                                <label for="exampleFormControlInput1" class="form-label text-white">Division</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" name='division' onBlur={handleBlur} placeholder="Enter Division" />
                            </div>
                            <div className='m-2'>
                                <label for="exampleFormControlInput1" class="form-label text-white">City</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" name='city' onBlur={handleBlur} placeholder="Enter City" />
                            </div>
                            <div className='m-2'>
                                <label for="exampleFormControlInput1" class="form-label text-white">Area</label>
                                <input type="text" class="form-control" required id="exampleFormControlInput1" name='area' onBlur={handleBlur} placeholder="Enter Area" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label text-white">Address</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" required rows="3" cols="85" name='address' onBlur={handleBlur} placeholder="Enter Address"></textarea>
                            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        }
        <div className='col-md-8 col-12 proceed-item '>
            <h3 className='mx-1 px-1 mx-sm-5 px-sm-3 mx-xl-5 px-xl-3 mx-xxl-5 px-xxl-3 mt-2'>CheackOut Info</h3>
            <div className='mx-1 px-1 mx-sm-5 px-sm-3 mx-xl-5 px-xl-3 mx-xxl-5 px-xxl-3 my-4 py-2 bg-white shadow rounded proceed-item-three'>
                <p>Adress</p>
                <form onSubmit={handleSubmit}>
                    <select class="form-select form-select-lg mb-3 pr-5 py-2 form-control" onChange={handleChange} required aria-label=".form-select-lg example">
                        <option >Open this select menu</option>
                        <option >Address</option>
                    </select>
                    <p className='bg-light p-2'>Please Create An Address First</p>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Contatct Number</label>
                        <input type="number" name="contactNumber" required className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Contact Number" />
                    </div>

                    <p>* For T10 campaign these <span className='text-danger'> Terms & Conditions </span> and  Delivery Charges  are applicable</p>
                    <p>For T10 orders, delivery of the products will be completed within 10 days after payment.</p>
                    <p>* Delivery of the products will be completed within approximately 30 working days after payment. for Priority Store, delivery will be complete within 24-72 hrs</p>
                    <p>* Delivery charge (40tk) will be added for orders from Priority Express, Unimart, Meenaclick, Khaas food, Khaleque&sons, Little india, Shwapno, Daily Bazar, Suha, Angelic, Shorong and Bengal Meat Express shops* For mobile express order, Delivery will be made within 2 hour</p>
                    <p>* For mobile express order, Delivery will be made within 2 hours</p>
                    <p>* Price included VAT for VAT applicable products</p>
                    <input type="checkbox" required name="checkbox" id="" /> I Agree With This Tearms and Cnoditions
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        <div className='col-md-4'>
            <h3 className='mx-1 px-1 mx-sm-5 px-sm-3 mx-xl-5 px-xl-3 mx-xxl-5 px-xxl-3 mt-2'>Order Summary</h3>
            <div className='  px-3 my-4 py-3 bg-white shadow rounded proceed-item-three'>
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

export default ConfrimOrder;