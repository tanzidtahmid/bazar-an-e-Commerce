import React from 'react';
import { useHistory } from 'react-router';
import './ProductForMen.css'

const ProductForMen = ({productForMen}) => {
    const history = useHistory()
    const handleProduct = () =>{
        history.push(`/singleManPd/${productForMen._id}`)
    }
    return (
        <div onClick ={handleProduct} className ='shadow p-3 mb-5 bg-body rounded mx-4 man-pd' style={{height:"320.33px",width:"221.33px"}}>
        <img className ='man-pd-img' src={`data:image/jpeg;base64,${productForMen.image.img}`} alt="" />
        <div>
            <p>{productForMen.title}</p>
            <p>{productForMen.price}</p>
        </div>
    </div>
    );
};

export default ProductForMen;