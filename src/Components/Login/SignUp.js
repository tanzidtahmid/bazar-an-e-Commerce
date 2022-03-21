import React, { useState } from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import '@firebase/auth'
import Navbar from '../Home/Navbar/Navbar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory()
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const [info, setInfo] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [password, setPassword] = useState({
        password: '',
        confrimPassword: ''
    })
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handlePassword = (e) => {
        const newPassword = { ...password };
        newPassword[e.target.name] = e.target.value;
        setPassword(newPassword);

    }
    const handleClick = () => {
        if (password.password == password.confrimPassword) {
            console.log('ok')
            const newInfo = { ...info };
            newInfo.password = password.confrimPassword;
            setInfo(newInfo)
        }
    }
    console.log(password)

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth()
            .createUserWithEmailAndPassword(info.email, info.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user)
                history.push('/login')
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });


    }
    console.log(info)
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center' >
                <form style={{ width: '300px' }}
                    onSubmit={handleSubmit}
                >
                    <h3>Sign Up</h3>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Name</label>
                        <input type="text" class="form-control" name='name' onBlur={handleBlur} id="formGroupExampleInput" placeholder="Enter Your Name" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">E-mail</label>
                        <input type="email" class="form-control" name='email' onBlur={handleBlur} id="formGroupExampleInput" placeholder="Enter Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' onBlur={handlePassword} id="formGroupExampleInput2" placeholder="Enter Your Password" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Confrim Password</label>
                        <input type="password" class="form-control" name='confrimPassword' onBlur={handlePassword} id="formGroupExampleInput2" placeholder="Enter Your Password" />
                    </div>
                    <div className='text-center' >
                        <input type="submit" value="Submit" className='btn btn-primary' onClick={() => handleClick()} />
                    </div>
                </form>
            </div>
            <div>
                
                <p className='text-center pt-3' >Already Have An Account? <Link to='/logIn'>LogIn</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;