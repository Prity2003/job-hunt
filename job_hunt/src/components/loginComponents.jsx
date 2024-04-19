import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import logo from '../assets/images/logo_orange.png'
import { loginAPI, RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import '../sass/login.scss';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await loginAPI(credentials.email, credentials.password);
            console.log(res.user.email);
            toast.success("you have logged in!");
            localStorage.setItem('userEmail', res.user.email);
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
        alert("you have logged in!");
        navigate("/home");
    }
    return (
        <div>
            <div className="login-wrapper">
            <img src={logo} alt="" className="logo"/> 
            <span className="logo-text"> JobHunt. </span>
            <h1 className="heading"> Sign In</h1>
            <p className="subHeading"> Make the most of your professional life!</p>
            <div className="auth-input">
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
            <button onClick={login} className="login-btn"> Sign In </button>
            <div className="google-btn-container">
            <GoogleButton 
                className="google-btn"
                onClick={googleSignIn} />
            </div>  
            <p> New to JobHunt? <span className="join-now" onClick={() => navigate("/register")}> Join Now </span></p>
        </div>
        </div>
        </div>
            
    );
}