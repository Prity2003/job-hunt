import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import logo from '../assets/images/logo_orange.png'
import { postUserData } from "../api/FirestoreAPI";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import '../sass/login.scss';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const register = async () => {
        try{
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success("account created!");
            postUserData({name: credentials.name, email:credentials.email} );
            localStorage.setItem('userEmail', res.user.email)
            navigate("/home");
        }
        catch (err) {
            alert(err.code); // This will print the Firebase error code
            alert(err.message);
        }
       
    };

    const googleSignIn = () => {
        let response=GoogleSignInAPI();
        console.log(response);
    }
    return (
        <div className="login-wrapper">
            <img src={logo} alt="" className="logo"/>
            <span className="logo-text"> JobHunt. </span>
            <h1 className="heading"> Register</h1>
            <p className="subHeading"> Make the most of your professional life!</p>
            <div className="auth-input">
            <input 
                onChange={(e) =>
                    setCredentials({...credentials, name: e.target.value})
                } 
                type="text" 
                className="common-input" 
                placeholder="Your Name"/> 
            <input 
                onChange={(e) =>
                    setCredentials({...credentials, email: e.target.value})
                } 
                type="email" 
                className="common-input" 
                placeholder="Enter your Email"/> 
            <input 
                onChange={(e)=>
                    setCredentials({...credentials, password: e.target.value})
                }
                type="password" className="common-input" placeholder="Enter your Password"/>
            <button onClick={register} className="login-btn"> Join JobHunt </button>
            <div className="google-btn-container">
            <GoogleButton 
                className="google-btn"
                onClick={googleSignIn} />
            </div>  
            <p> Already on JobHunt? <span className="join-now" onClick={() => navigate("/login")}> Login </span></p>
        </div>
        </div>
    );
}