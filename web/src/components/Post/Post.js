import React
// , {useState, useContext}
  from 'react';
import './Post.css';

import { Link } from 'react-router-dom';

// import { UserContext } from '../UserContext/UserContext';

// import LikeHeart from '../LikeHeart/LikeHeart';
// import Comment from '../Comment/Comment.js';

const Post = ({data}) => {
  
  // const { dataUser } = useContext(UserContext);
  console.log("posts", {...data})
  // console.log("posts 2", data)
  // const [comments, setComments] = useState(data.comments);
  // const [comment, setComment] = useState('');
  
  // function handleInput(e){
  //   setComment(e.target.value);
  // }
  
  // function handleSendComment(e){
  //   e.preventDefault();
  //   console.log(e);
  //   if(comment === ''){
  //     return;
  //   }
  //   const newComment = {
  //       'username':dataUser.username,
  //       comment
  //   }
  //   setComments([...comments, newComment ])
  //   setComment('');

  // }

  console.log('author', data.author && data.author.username)
  
  return(
    data &&
    <article className="post">
        <header className="post__header">
          <Link className="post__header__link" to={`/user/${data.author && data.author.username}`}>
            <img className="post__header__img" src={data.author && data.author.image} alt={data.author && data.author.username} />
            <h2 className="post__header__title">{data.author && data.author.username}</h2>
          </Link>
        </header>
        <img className="post__image" src={data.image} alt={data.author && data.author.username}/>
        <footer className="post__footer">
          <div className="post__footer__wrapper">
            <div className="post__footer__header">
              {/* { login && <LikeHeart liked={data.liked.includes(dataUser && dataUser.id)}/> } */}
            </div>
            <div className="post__footer__liked-bar">
              {/* {data.liked.length === 0 ? 'Até agora ninguem curtiu' : `Curtido por ${data.liked.length} pessoas`} */}
            </div>
            {/* <div className="post__footer__comments">
               {
                 comments && comments.map( (comment, index) => (
                   <Comment key={index} username={comment.username} comment={comment.comment}/>
                 ))
               }
            </div> */}
            </div>
            {/* { login &&
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
            } */}
        </footer> 
    </article>
  )
}

export default Post;