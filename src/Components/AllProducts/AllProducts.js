import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar'

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method :'DELETE'
        })
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    }
    return (
        <div className="row">
        <div className='col-2'>
            <Sidebar></Sidebar>
        </div>
        <div className='col-10'>

            <div>
                <table className="table">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Catagoary</th>
                        <th>Delete</th>
                    </tr>
                    {
                        allProducts.map(product =>
                            
                                <tr>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.catagoary}</td>
                                    <td style={{cursor:'pointer'}} onClick ={()=>handleDelete(product._id)}>Delete</td>
                                </tr>
                        
                        )
                    }

                </table>
            </div>
        </div>
    </div>
    );
};

export default AllProducts;