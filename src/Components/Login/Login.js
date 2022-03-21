import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import '@firebase/auth'
import { userContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';


const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    var provider = new firebase.auth.GoogleAuthProvider();
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    //Sign In With Email And Password
    const handleBlur = (e) =>{
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleSignIn = (e) => {
        e.preventDefault() 
        firebase.auth().signInWithEmailAndPassword(info.email, info.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                history.replace(from);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    // Sign In With Google
    const handleSubmit = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user)
                setSignedInUser(user)
                history.replace(from);
                localStorage.setItem('cartInfo', JSON.stringify([]))
                localStorage.setItem('email', user.email)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center pt-3 '>
                <div>
                    <form style={{ width: '300px' }} onClick={handleSignIn} className='text-center'>
                        <h4>Sign In</h4>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Enter Your E-mail" required onBlur={handleBlur} />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" required onBlur={handleBlur} />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                    <div className='pt-3 text-center'>
                        <p>Don't have any account <Link to='/signUp'> Sign Up</Link> </p>
                    </div>
                        <hr />

                    <div className='text-center'>
                        <p>or</p>
                        <button onClick={() => handleSubmit()} className="btn btn-danger"><span> <FontAwesomeIcon icon={faGoogle} /> </span> Sign In With Google </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;