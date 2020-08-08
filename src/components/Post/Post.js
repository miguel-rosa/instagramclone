import React, {useState, useContext} from 'react';
import './Post.css';

import UserContext from '../UserContext/UserContext';

import LikeHeart from '../LikeHeart/LikeHeart';
import Comment from '../Comment/Comment.js';

const Post = ({data}) => {
  
  const user = useContext(UserContext);

  const [comments, setComments] = useState(data.comments);
  const [comment, setComment] = useState('');
  

  function handleInput(e){
    setComment(e.target.value);
  }
  
  function handleSendComment(e){
    e.preventDefault();
    console.log(e);
    if(comment === ''){
      return;
    }
    const newComment = {
        'username':'miguel',
        comment
    }
    setComments([...comments, newComment ])
    setComment('');

  }

  return(
    <article className="post">
        <header className="post__header">
          <img className="post__header__img" src={data.author.photo} alt={data.author.username} />
          <h2 className="post__header__title">{data.author.username}</h2>
        </header>
        <img className="post__image" src={data.image} alt={data.author.username} />
        <footer className="post__footer">
          <div className="post__footer__wrapper">
            <div className="post__footer__header">
              <LikeHeart  liked={data.liked.includes(user.id)}/>
            </div>
            <div className="post__footer__liked-bar">
              {data.liked.length === 0 ? 'Até agora ninguem curtiu' : `Curtido por ${data.liked.length} pessoas`}
            </div>
            <div className="post__footer__comments">
               {
                 comments.map( (comment, index) => (
                   <Comment key={index} username={comment.username} comment={comment.comment}/>
                 ))
               }
            </div>
            </div>
          <form onSubmit={handleSendComment} className="post__footer__send-comment">
            <textarea 
              className="post__footer__send-comment__input" 
              type="text"
              placeholder="Adicione um comentário"
              rows="1"
              value={comment}
              onChange={handleInput}
            />
            <button type="submit" className="post__footer__send-comment__send">Publicar</button>
          </form>
        </footer> 
    </article>
  )
}

export default Post;