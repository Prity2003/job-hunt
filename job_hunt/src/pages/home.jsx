import React, { useEffect, useState } from "react";
import HomeComponent from "../components/homeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseconfig";
import Loader from "../components/common/loader";

export default function Home({currentUser}) {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken){
                navigate('/login');
            }
            else {
                setLoading(false);
            }
        });
    }, []);
    return loading? <Loader /> : <HomeComponent currentUser={currentUser}/>
}