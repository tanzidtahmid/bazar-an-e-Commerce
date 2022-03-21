import React from 'react';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../Sidebar/Sidebar';
const AddAdmin = () => {
    const [admin,setAdmin] = useState({})
    const handleBlur = (e) =>{
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(admin)
        fetch('http://localhost:5000/addAdmin',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
            
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div className='row'>
        <div className='col-md-2'>
            <Sidebar></Sidebar>
        </div>
        <div className='col-md-10'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name='Name' onBlur = {handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Phone</label>
                        <input type="number" name='phone'  onBlur = {handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className = 'row'>
                    
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">E-mail</label>
                        <input type="email" name='email'  onBlur = {handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" name ='address' class="form-control"  onBlur = {handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    </div>
                    <div class="mb-3 col-md-12 p-0">
                        <h6>Description</h6>
                        <textarea class="form-control" name="description"  onBlur = {handleBlur} id="" cols="60" rows="10" aria-describedby="emailHelp" ></textarea>
                    </div>

                    <input type="submit" className='bg-primary px-4 py-2' value="Submit" />
            </form>
        </div>
    </div>
    );
};

export default AddAdmin;