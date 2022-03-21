import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ProductForMen from '../ProductForMen/ProductForMen';

const FashionForMen = () => {
    const [productsForMen, setProductsForMen] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fashionForMen')
        .then(res=>res.json())
        .then(data=>{
            setProductsForMen(data)
            console.log(data)
            
        },[])
        console.log(productsForMen)
    })
    return (
        <div>
            <h4 className='pl-4'>Fashion for Men</h4>
            <div className='d-flex flex-wrap justify-content-center align-items-cemter'>
                {
                    productsForMen.map(productForMen=> <ProductForMen key={productForMen._id} productForMen ={productForMen}></ProductForMen> )
                }
            </div>
            
        </div>
    );
};

export default FashionForMen;