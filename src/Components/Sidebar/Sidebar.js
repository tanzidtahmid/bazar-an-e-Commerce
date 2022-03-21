import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Sidebar.css'


const Sidebar = () => {
    const emailFromLS = localStorage.getItem('email')
    console.log(emailFromLS)
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAdmins')
            .then(res => res.json())
            .then(data => setAdmins(data))
            .catch(err => console.log(err))
    }, [])

    const isAdminValid = admins.find(adminEmail => adminEmail.email == emailFromLS)
    return (
        <div className='sidebar'>
        <ul className='unorder-list'>
            <li className='py-2'> <Link to='/' className='text-white'> Home </Link></li>
            <li className='py-2'> <Link to='/dashboard' className='text-white'> Dashboard</Link> </li>
            {isAdminValid &&
                <ul className='unorder-list pl-0'>
                    <li className='py-2'> <Link to='/allProducts' className='text-white'> All Products</Link></li>
                    <li className='py-2'> <Link to='/admins' className='text-white'> Admins</Link></li>
                    <li className='py-2'> <Link to='/addProducts' className='text-white'> Add Products </Link> </li>
                    <li className='py-2'> <Link to='/allOrder' className='text-white'> All Order </Link> </li>
                </ul>
            }
        </ul>
    </div>
    );
};

export default Sidebar;