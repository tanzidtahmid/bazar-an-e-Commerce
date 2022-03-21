import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const history = useHistory()
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/orderList")
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
    // const newOrderList = orderList.map(order=>order.productInfo)
    // const {totalQuantities} = newOrderList.map(order=>order.totalQuantities)
    console.log(orderList)

    const handleClick = (id) =>{
        history.push(`/OrderEdit/${id}`)
    }
    return (
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10 col-sm-10 col-12'>
                <div className='d-flex justify-content-around'>
                    <h6>Name</h6>
                    <h6>TotalQuantities</h6>
                    <h6>Total Price</h6>
                    <h6>Status</h6>
                </div>
                {
                    orderList.map(order => <div key={order._id} className='d-flex justify-content-around py-3' style={{cursor:'pointer'}} onClick={()=>handleClick(order._id)}>
                        <h6>{order.productInfo.recipientInfoson.recipientName}</h6>
                        <h6>{order.productInfo.totalQuantities}</h6>
                        <h6>{order.productInfo.totalPrice}</h6>
                        <h6>{order.productInfo.recipientInfoson.status}</h6>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OrderList;