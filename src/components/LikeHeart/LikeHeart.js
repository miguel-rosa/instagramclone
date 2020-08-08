import React, { useState } from 'react';
import './LikeHeart.css';

import {FaRegHeart as NotLikedHeartIcon} from 'react-icons/fa';
import {FaHeart as LikedHeartIcon} from 'react-icons/fa';

const LikeHeart = (props) => {
   
    const [liked, setLiked] = useState(props.liked);

    return (
        <div onClick={() => setLiked(!liked)}>
            { liked ? <LikedHeartIcon style={{color:'red'}} className="post__footer__header__heart-icon" /> :
                <NotLikedHeartIcon className="post__footer__header__heart-icon" /> 
            }
        </div>
    );
}

export default LikeHeart;