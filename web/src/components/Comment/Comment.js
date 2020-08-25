import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return(
      <div className="post_footer__comments__comment">
        <b>{props.username}</b> <span className="post_footer__comments__comment__text">{props.comment}</span>
      </div>
    );
  }
  
export default Comment;