import React from "react";
import { onLogout } from "../../../api/AuthAPI";
import './profilePopUp_index.scss';

export default function ProfilePopUp() {
    return (
        <div className="popup-card">
            <ul className="popup-options">
                <li className="popup-option" onClick={onLogout()}> 
                    Logout
                </li>
            </ul>
        </div>
    );
}