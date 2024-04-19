import React from "react";
import '../sass/homeComponent.scss'
import Topbar from "./common/topbar";
import PostStatus from "./common/postUpdate/postUpdate";

export default function HomeComponent({ currentUser }) {
    return (
    <div>
        <PostStatus currentUser={ currentUser}/>
    </div>
    );
}