import React from 'react';
import './UserPost.css';

import { Link } from 'react-router-dom';

const UserPost = ({post}) => {
    return(
        <Link to={`/account/p/${post.id}`} >
            <article className="user-post__post" style={{backgroundImage:`url('${post.photo}')`}} />
        </Link>
    )
}

export default UserPost;