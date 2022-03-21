import React from 'react';

const SingleOrderPd = ({ productInfo }) => {
    return (
        <div className='shadow rounded py-4'>
            {
                productInfo.map(product =>
                    <div key={product._id}>
                        <div className='d-flex'>
                        <img className='man-pd-img' src={`data:image/jpeg;base64,${product.image.img}`} alt="" />
                        <div>
                            <h6>Title: {product.title}</h6>
                            <p>Catagory: {product.catagoary}</p>
                            <div className='d-flex'>
                                <p  className='d-flex mr-2'>Color: {product.color}; </p>
                                <p  className='d-flex mr-2'>Quantity: {product.quantity}; </p>
                                <p  className='d-flex mr-2'>Price: {product.price};</p>
                            </div>
                        </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default SingleOrderPd;