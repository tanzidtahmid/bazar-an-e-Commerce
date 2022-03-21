import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar';

const Admins = () => {
    const [admins, setAdmins] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getAdmins')
        .then(res=>res.json())
        .then(data=>setAdmins(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='row'>
        <div className="col-md-2 m-0 p-0">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 m-0 p-0">
            <div className='bg-light p-3'>
                <h5 className='text-end'><Link to='/addAdmin'>Add Admin</Link></h5>
            </div>
            <div>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th></th> */}
                    </tr>
                    {
                        admins.map(admin =>
                            
                                <tr>
                                    <td>{admin.Name}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.phone}</td>
                                    {/* <td styl={{cursor:'pointer'}} onClick ={()=>handleDelete(product._id)}>Delete</td> */}
                                </tr>
                        
                        )
                    }

                </table>
                </div>

        </div>
    </div>
    );
};

export default Admins;