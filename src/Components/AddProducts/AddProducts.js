import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddProducts = () => {
    const [file, setFile] = useState(null)
    const [products, setProducts] = useState({})

    const handleFileChange = e =>{
        const newFile= e.target.files[0]
        setFile(newFile)
    }
    // console.log(file)


        const handleBlur = (e) =>{
        const newProducts = {...products}
        newProducts[e.target.name] = e.target.value;
        setProducts(newProducts)
    }
    // console.log(products)
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(file,products)
        var formData = new FormData();
        formData.append('file', file)
        formData.append('title', products.title)
        formData.append('price', products.price)
        formData.append('description', products.description)
        formData.append('catagoary', products.catagoary)
        // formData.append('username', 'Chris');
        
        console.log(formData)
        
        fetch('http://localhost:5000/addProducts',{
            method : 'POST',
            body : formData
        })
        .then(response=>response.json())
        .then(data => {
            console.log(data)
        })
        .then(error =>{ 
            console.error(error)
        })
    }

    return (
        <div className='row'>
        <div className='col-md-3'>
            <Sidebar></Sidebar>
        </div>
        <div className='col-md-9'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Product's Title</label>
                        <input type="text" name='title' onBlur = {handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div class="mb-3 form-check col-md-6 p-2">
                        <label class="form-check-label" for="exampleCheck1">Image</label>
                        <br />
                        <input type="file" onChange ={handleFileChange} name='image' class="form-check-input" id="exampleCheck1" />
                    </div>
                </div>
                <div className = 'row'>
                    
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Catagoary</label>
                        <input type="text" name='catagoary'  onBlur = {handleBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" class="form-label">Price</label>
                        <input type="text" name ='price' class="form-control"  onBlur = {handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" />
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

export default AddProducts;