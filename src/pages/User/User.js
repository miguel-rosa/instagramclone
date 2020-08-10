import React, { useState, useEffect } from 'react';
import './User.css';

import { UNIQUE_USER_GET } from '../../api';

/*import UserPost from '../../components/UserPost/UserPost';


const user = {
    'id':1,
    'name':'therealnoias',
    'title':'Os grandes cornos da quebrada.',
    'description':'Luis para de curtir as suas fotos \n  Pfv\n  luis Não',
    'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/105379171_372769043689602_8272685980676654933_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=dG59d3YxyPIAX_Yu83k&oh=444f1e1bf9fc7e3066189d3dd4177049&oe=5F55827F',
    'posts':[
        {
            'id':12,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/115938150_320233819130608_3300500812918605291_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SvpBjDJyK4wAX-H0_ok&oh=4b1875fed03edaeef4bde8871f01117e&oe=5F5A74E8'
        },
        {
            'id':13,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/117023107_2344497312525467_6015447809918356012_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CDNuKQFkSFgAX_Dr9jY&oh=653bd712cd182e40b6bf0a9e6287328d&oe=5F586EE3'
        },
        {
            'id':14,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117155162_2101846406780502_2860568112420455038_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=trt5xDWFT6IAX9cpygk&oh=b55e24cdd4065577a94b3f4c547a5af9&oe=5F567C02'
        },
        {
            'id':16,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/115938150_320233819130608_3300500812918605291_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SvpBjDJyK4wAX-H0_ok&oh=4b1875fed03edaeef4bde8871f01117e&oe=5F5A74E8'
        },
        {
            'id':18,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/117023107_2344497312525467_6015447809918356012_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CDNuKQFkSFgAX_Dr9jY&oh=653bd712cd182e40b6bf0a9e6287328d&oe=5F586EE3'
        },
        {
            'id':19,
            'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117155162_2101846406780502_2860568112420455038_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=trt5xDWFT6IAX9cpygk&oh=b55e24cdd4065577a94b3f4c547a5af9&oe=5F567C02'
        },
    ]
}
*/

const User = ({ match }) => {
    
    const { params: {id} } = match;  

    const [ user, setUser ] = useState({
        'email':'',
        'id':'',
        'image':{
            'url': 'http://0.gravatar.com/avatar/f587b8a2cefb2e7be0cb123f1fdc44b5?s=96&d=mm&r=g'
        },
        'name': 'miguel-test',
        'username': 'miguel-test' 
    });

    useEffect( () => {
        async function fetchData() {
            const { url, options } = UNIQUE_USER_GET(id)
            const response = await fetch(url, options);
            const json = await response.json();
            
            setUser(json);
            console.log(json);
        }
        fetchData()
    }, [id]);
        
    return (
            <main className="user">
                <div className="user__container">
                    <header className="user__header">
                        <div className="user__photo">
                            <img className="user__photo__image" src={user.image.url} alt={user.title} />
                        </div>
                        <div className="user__infos">
                            <div>
                                <h1 className="user__name">{user.name}</h1>
                            </div>
                            <div className="user__numbers">
                                <span className="user__number"><b>{/* user.posts.length */}</b> publicações</span>
                                <span className="user__number"><b>10</b> seguidores</span>
                                <span className="user__number"><b>20</b> seguindo</span>
                            </div>
                            <h2 className="user__title">{ /*user.title */}</h2>
                            <p className="user_description">{ /*user.description */}</p>
                        </div>
                    </header>
                    <section className="user__posts">
                        {
                            /*user.posts.map( post => (
                                <UserPost key={post.id} post={post} />
                            ))*/
                        }
                    </section>
                </div>
            </main>
            
        );
}

export default User;