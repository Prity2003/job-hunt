import React, { useMemo, useState } from "react";
import ProfileCard from "./common/ProfileCard/profileCard";


export default function ProfileComponent({ currentUse }){
    return (
        <div>
            <ProfileCard currentUser={currentUser} />
        </div>
    )
}