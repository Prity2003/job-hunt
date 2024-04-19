import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import logo from '../../../assets/images/logo_orange.png';
import user from '../../../assets/images/user.png';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";


export default function Topbar() {
    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
    };


    return (
    <div className='topbar-main'>  
        <img className="logo-home" src={logo} alt='logo' />
        <div className='react-icons'>
            <IoHomeOutline className='home-icon' onClick={() => goToRoute('/home')}/>
            <FaRegUser className='profile-icon' onClick={() => goToRoute('/profile')}/>
            <IoBriefcaseOutline className='briefcase-icon'/>
            <IoMdSearch className='search-icon'/>
            <TiMessages className='message-icon'/>
            <IoMdNotificationsOutline className='notif-icon'/>
        </div>
        <img className="user-logo" src={ user } alt='user' />
    </div>
    );
}