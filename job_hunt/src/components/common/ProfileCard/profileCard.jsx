import React from "react";
import "./profileCard.scss";

export default function ProfileCard({ currentUser}){
    return(
        <div className="profile-card">
            {currentUser}
        </div>
    )
}