import React from 'react';
import { useState } from 'react/cjs/react.development';

const RecipientInfoson = ({ recipientInfoson,id }) => {
    console.log(recipientInfoson.status)
    let [status,setStatuse] = useState({});

    const detailAboutProducts = (e) => {
        const newStatus = {...status}
        newStatus[e.target.name] = e.target.value;
        setStatuse(newStatus)
    }
    console.log(status)

    const handleDone = (id) =>{
        
        const url = `http://localhost:5000/updateStatuse/${id}`
        console.log(url)
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Updated')
            })
        
    }
    return (
        <div className='shadow rounded py-4'>
        <div className='d-flex justify-content-around'>
            <h5>Coustmer Name: {recipientInfoson.recipientName}</h5>
            <select class="form-select px-4 py-2" name='status' aria-label="Default select example" onChange={detailAboutProducts} >
                <option value='painding'>{recipientInfoson.status}</option>
                <option value="onGoing">On Going</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <div className='d-flex justify-content-around pt-4'>
            <h6>Phone No: {recipientInfoson.phoneNo}</h6>
            <h6>Address: {recipientInfoson.address}</h6>
            {/* <h6>Area: {recipientInfoson.area}</h6> */}
        </div>
        <div className='d-flex justify-content-around pt-4'>
            <h6>Division: {recipientInfoson.division}</h6>
            <h6>City: {recipientInfoson.city}</h6>
            <h6>Area: {recipientInfoson.area}</h6>
        </div>
        <div className='d-flex justify-content-end pt-4 pr-5'>
            <button className="btn btn-primary" onClick={()=>handleDone(id)}>Done</button>
        </div>
    </div>
    );
};

export default RecipientInfoson;