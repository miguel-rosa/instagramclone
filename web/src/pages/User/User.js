import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import { useParams, useNavigate } from 'react-router-dom';
import { UNIQUE_USER_GET, FOLLOW_POST, DELETE_POST} from '../../api';

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
        'image':'',
        'name': '',
        'username': '',
        'posts': ['']
    });

    
    console.log('username', username, 'dataUser', dataUser)

    useEffect( () => {
        async function fetchData() {
            const token = window.localStorage.getItem('token') || null ;
            console.log('token', token)
            const { url, options } = UNIQUE_USER_GET(username, token)
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
        console.log('deleeeeeete')
        const token = window.localStorage.getItem('token');
        const { url, options } = DELETE_POST(id, token);
        const response = await fetch(url, options);
        console.log('response', response)
        if(response.ok){
            const posts = user.posts
            const updatedPosts = posts.filter( item => item.id !== id);
            console.log(posts, updatedPosts)
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

    async function followUser(){
        
        const follow = {
            followerId: dataUser.id,
            followedId: user.id
        }
        const token = window.localStorage.getItem('token');
        console.log(follow.followerId, follow.followedId)

        const {url, options } = FOLLOW_POST({...follow}, token);
        const response  = await fetch(url, options);
        const json = await response.json();

        if(response.ok) console.log('ok response')
    }
    
    return (
            <main className="user">
                <div className="user__container">
                    <header className="user__header">
                        <div className="user__photo">
                            <div className="user__photo__image" style={{backgroundImage:`url('${user.image}')`}}/>
                        </div>
                        <div className="user__infos">
                            <div>
                                <h1 className="user__name">{user.username}</h1>
                            </div>
                            <div className="user__numbers">
                                <span className="user__number">
                                    {user.posts.length ? <b>{user.posts.length}</b> :'Nenhuma' }
                                    {user.posts.length <= 1 ? ' publicação' : ' publicações'}</span>
                                <span className="user__number"><b>10</b> seguidores</span>
                                <span className="user__number"><b>20</b> seguindo</span>
                            </div>
                            {
                                dataUser && !isUser && 
                                <div className="user__follow">
                                    <button onClick={() => followUser()}>Seguir usuário</button>
                                </div>
                            }
                            <h2 className="user__title">{ user.name }</h2>
                            <p className="user_description">{ user.description }</p>
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