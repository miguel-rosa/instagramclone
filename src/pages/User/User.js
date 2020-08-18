import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import { useParams, useNavigate } from 'react-router-dom';
import { UNIQUE_USER_GET } from '../../api';

import { DELETE_POST } from '../../api';

import { FiX as CloseIcon } from 'react-icons/fi'

import UserPost from '../../components/UserPost/UserPost';

import { UserContext } from '../../components/UserContext/UserContext';

const User = () => {
    
    /*  
        VERIFICAR SE USUÁRIO EXISTE, SE NÃO -> 404
    */
    const navigate = useNavigate();
    const { dataUser } = useContext(UserContext);
    const { username } = useParams();
    const [ isUser, setIsUser ] = useState(Boolean());

    const [ user, setUser ] = useState({
        'email':'',
        'id':'',
        'image':'http://0.gravatar.com/avatar/f587b8a2cefb2e7be0cb123f1fdc44b5?s=96&d=mm&r=g',
        'name': '',
        'username': '',
        'posts': ['']
    });

    useEffect( () => {
        async function fetchData() {
            const { url, options } = UNIQUE_USER_GET(username)
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json)    
            if(json){
                setUser(json);
            }else{
                navigate('/')
            }
        }
        fetchData()
    }, [username, navigate]);
     
    useEffect ( () => {
        if( dataUser && dataUser.id === user.id){
            setIsUser(true)
        }else{
            setIsUser(false);
        }
    }, [dataUser, user.id])

    function handlePostDelete(id){
        return deletePost(id)
    }

    async function deletePost(id){
        const token = window.localStorage.getItem('token');
        const { url, options } = DELETE_POST(id, token);
        const response = await fetch(url, options);
        
        if(response.ok){
            const posts = user.posts
            const updatedPosts = posts.filter( item => item.id !== id);
            
            setUser({
                'email':user.email,
                'id':user.id,
                'image':user.image,
                'name': user.name,
                'username': user.username,
                'posts': updatedPosts
            })
        }
    }
    
    return (
            <main className="user">
                <div className="user__container">
                    <header className="user__header">
                        <div className="user__photo">
                            <img className="user__photo__image" src={user.image} alt={user.title} />
                        </div>
                        <div className="user__infos">
                            <div>
                                <h1 className="user__name">{user.username}</h1>
                            </div>
                            <div className="user__numbers">
                                <span className="user__number"><b>{user.posts.length}</b>{user.posts.length === 1 ? ' publicação' : ' publicações'}</span>
                                <span className="user__number"><b>10</b> seguidores</span>
                                <span className="user__number"><b>20</b> seguindo</span>
                            </div>
                            <h2 className="user__title">{ user.name }</h2>
                            <p className="user_description">{ /*user.description */}</p>
                        </div>
                    </header>
                    <section className="user__posts">
                        {
                            user.posts.map( post => (
                                <UserPost key={post.id} post={post}>
                                  { isUser && <CloseIcon onClick={ () => handlePostDelete(post.id )} className="user__post__close" /> }
                                </UserPost>
                            ))
                        }
                    </section>
                </div>
            </main>
            
        );
}

export default User;