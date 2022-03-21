import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Home/Navbar/Navbar';
import ProductForMen from '../ProductForMen/ProductForMen';

const HomeAppliance = () => {
    const [homeAppliance, setHomeAppliance] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/homeAppliance')
        .then(res=>res.json())
        .then(data=>setHomeAppliance(data))
    },[])
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <h4 className='pl-4'>Home Appliance</h4>
            <div className='d-flex flex-wrap justify-content-center align-items-cemter'>
                {
                    homeAppliance.map(productForMen=> <ProductForMen key={productForMen._id} productForMen ={productForMen}></ProductForMen> )
                }
            </div>
            
        </div>
    );
};

export default HomeAppliance;