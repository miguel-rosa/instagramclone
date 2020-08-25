import React from 'react';
import './UserPost.css';

const UserPost = (props) => {
    
      return(
        
        /*to={`/account/p/${post.id}`}*/
        <div className="user__post__wrapper"  >
            <article className="user-post__post" style={{backgroundImage:`url('${props.post.src}')`}}>
                { props.children }
            </article>
        </div>
        
    )
}

export default UserPost;