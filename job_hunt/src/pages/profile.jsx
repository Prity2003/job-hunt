import React from "react";
import ProfileComponent from "../components/profileComponent";

export default function Profile({ currentUser })
{
    return <ProfileComponent currentUser= { currentUser } />
}