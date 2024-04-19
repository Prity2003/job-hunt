import React, {useMemo, useState} from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/topbar";
import ProfileComponent from "../components";
import Profile from "../pages/profile"
import { useActionData } from "react-router-dom";

export default function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({ });

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
    return (
        <div>
            <Topbar />
            <Profile currentUser={currentUser} />
        </div>
    );
}