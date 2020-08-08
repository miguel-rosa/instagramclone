import React from 'react';
import './Feed.css';

import Post from '../../components/Post/Post'




const posts = [
    {
      'id':1,
      'author':{
          'username':'miguel',
          'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/105379171_372769043689602_8272685980676654933_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=dG59d3YxyPIAX_Yu83k&oh=444f1e1bf9fc7e3066189d3dd4177049&oe=5F55827F'
        },
      'image':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117155162_2101846406780502_2860568112420455038_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=trt5xDWFT6IAX9cpygk&oh=b55e24cdd4065577a94b3f4c547a5af9&oe=5F567C02',
      'liked':[],
      'comments':[
        {
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },
        { 
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },  
        {
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },  
      ]
    },
    {
      'id':2,
      'author':{
          'username':'miguelgoncv',
          'photo':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/105379171_372769043689602_8272685980676654933_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=dG59d3YxyPIAX_Yu83k&oh=444f1e1bf9fc7e3066189d3dd4177049&oe=5F55827F'
        },
      'image':'https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117155162_2101846406780502_2860568112420455038_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=trt5xDWFT6IAX9cpygk&oh=b55e24cdd4065577a94b3f4c547a5af9&oe=5F567C02',
      'liked':[12,1,285,54,678,44,11,7,48946,64],
      'comments':[
        {
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },
        { 
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },  
        {
          "username":'miguel',
          "comment":"Que legalzão esse bagulho ae"
        },  
      ]
    }
  ]

const Feed = () => {
    return(
        <main id="feed">
            <div id="feed__container">
                {
                    posts.map( post => (
                    <Post key={post.id} data={post} />
                    ))
                }
            </div>
        </main>
    );
}

export default Feed;