import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import RecipientInfoson from './RecipientInfoson';
import SingleOrderPd from './SingleOrderPd';

const SingleOrder = () => {
    const {id}=useParams()
    console.log(id)
    const [singleOrder,setsingleOrder] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/singleOrder/${id}`)
        .then(res=>res.json())
        .then(data=>setsingleOrder(data))
    },[]);
    console.log(singleOrder)
    return (
        <div className='row pt-4'>
            <div className='col-md-6'>
            {
                singleOrder.map(product=>
                    <div>
                        <SingleOrderPd productInfo = {product.productInfo.products} ></SingleOrderPd>
                    </div>
                    )
            }

            </div>
            <div className='col-md-6'>
            {
                singleOrder.map(product=>
                    <div>
                        <RecipientInfoson recipientInfoson = {product.productInfo.recipientInfoson} id = {id}></RecipientInfoson>
                    </div>
                    )
            }
            </div>
        </div>
    );
};

export default SingleOrder;