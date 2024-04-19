import React from "react";
import './postCard_index.scss';

export default function PostCard({ posts }) {
    return (
        <div className="posts-card">
            <p className="name"> {posts.userName} </p>
            <p className="timestamp"> { posts.timeStamp }</p>
            <p className="status"> {posts.status} </p>
        </div>
    )
}