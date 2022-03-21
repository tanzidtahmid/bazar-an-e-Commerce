import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Home/Navbar/Navbar';
import './SingleManPd.css'
import SingleManPdInfo from './SingleManPdInfo';

const SingleManPd = () => {
    const { id } = useParams()
    // console.log(id)
    const [singleManPd, setSingleManPd] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/singleManPd/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleManPd(data)
            })
    }, []);
    return (
        <div>
        <Navbar></Navbar>


        <div>
        {
            singleManPd.map(productInfo=><SingleManPdInfo key={productInfo._id} productInfo ={productInfo}></SingleManPdInfo>)
        }
        </div>
    </div>
    );
};

export default SingleManPd;