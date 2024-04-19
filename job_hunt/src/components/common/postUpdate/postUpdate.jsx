import React, { useState, useMemo } from "react";
import { PostStatusDB, getPosts } from "../../../api/FirestoreAPI.jsx";
import './postupdate.scss';
import ModalComponent from '../Modal/modal_index.jsx';
import PostCard from "../postCards/postCard_index.jsx";
import { getCurrentDate } from "../../../helpers/useMoment.jsx";
import { getUniqueID } from "../../../helpers/getUniqueId.jsx";

export default function PostStatus() {
    let userEmail = localStorage.getItem('userEmail');
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState(" ");
    const [allStatus, setAllStatus] = useState([]);
    const sendStatus = async() => {
        let obj = {
            status: status,
            timeStamp: getCurrentDate("LLL"),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID: getUniqueID(),
        };
        await PostStatusDB(obj);
        await setModalOpen(false);
        await setStatus("");
    }; //send status to firebase
    //console.log(getCurrentDate("LLL"));

    useMemo(() => {
        getPosts(setAllStatus);
    })

    //console.log(allStatus);
    return (
    <div className="post-status-parent">
        <div className="post-status" style={{ marginTop: '150px' }}>
            <button className="open-post-modal" onClick={() => setModalOpen(true)}> Write a Post </button>
        </div>

        <ModalComponent 
            setStatus={setStatus}
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}
            status={status}
            sendStatus={sendStatus}
        />

        <div className="post-status-parent">
            {allStatus.map((posts, index) => {
                return (
                    <PostCard key={index} posts={posts}/>
                )
            })}
        </div>
    </div>
    );
}