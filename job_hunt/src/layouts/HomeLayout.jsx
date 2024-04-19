import React, { useMemo, useState } from "react";
import Home from "../pages/home";
import Topbar from "../components/common/topbar";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayout() {
    const [cuurentUser, setCurrentUser] = useState({});
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, [])
    return (
        <div>
            <Topbar />
            <Home currentUser={cuurentUser}/>
        </div>
        
    )
}