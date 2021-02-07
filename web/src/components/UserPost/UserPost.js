import React from 'react';
import './UserPost.css';

const UserPost = (props) => {
    console.log('props', props)
      return(
        
        /*to={`/account/p/${post.id}`}*/
        <div className="user__post__wrapper"  >
            <article className="user-post__post" style={{backgroundImage:`url('${props.post.image}')`}}>
                { props.children }
            </article>
        </div>
        
    )
}

export default UserPost;