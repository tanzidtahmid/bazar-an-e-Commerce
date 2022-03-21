import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from "react-router-dom";

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/dashboard')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);
    const email = localStorage.getItem('email');
    const myOrder = myOrders.filter(mySingleOrder => mySingleOrder.productInfo?.recipientInfoson?.email == email);
    console.log(myOrder);
    // myOrder.map(order=>console.log(order.productInfo.recipientInfoson.status))

    const handleClick = (id) =>{
    }
    return (
        <div>
        {
            <div className='row'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10'>
                <div className='d-flex justify-content-around'>
                    <h6>Name</h6>
                    <h6>TotalQuantities</h6>
                    <h6>Total Price</h6>
                    <h6>Status</h6>
                </div>
                {
                    myOrder.map(order => <div key={order._id} className='d-flex justify-content-around py-3' style={{cursor:'pointer'}} onClick={()=>handleClick(order._id)}>
                        <h6>{order.productInfo.recipientInfoson.recipientName}</h6>
                        <h6>{order.productInfo.totalQuantities}</h6>
                        <h6>{order.productInfo.totalPrice}</h6>
                        <h6>{order.productInfo.recipientInfoson.status}</h6>
                    </div>)
                }
            </div>
        </div>
            
                
        }
    </div>
    );
};

export default MyOrder;