import React /*, { useEffect, useState }*/ from 'react';
import './Feed.css';

import Post from '../../components/Post/Post'


// import { PHOTOS_GET } from '../../api';




const posts = [
    {
      'id':1,
      'author':{
          'id':2,
          'username':'rosamiguel',
          'photo':'https://secure.gravatar.com/avatar/a6ba4562a8724b96c2a29ee19c14d74a?s=96&d=mm&r=g'
        },
      'image':'https://wdtheme.wdt.com.br/wp-content/uploads/2020/08/cover-linkedin-1000x396.png',
      'liked':[],
      'comments':[
        {
          "username":'miguel',
          "comment":"Show!!"
        },
        { 
          "username":'victoria',
          "comment":"Muito bomm"
        },   
      ]
    },
    {
      'id':2,
      'author':{
          'id':1,
          'username':'togorv',
          'photo':'https://images.unsplash.com/profile-1596465537821-89e405f774f5image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
        },
      'image':'https://images.unsplash.com/photo-1597685205229-f42f70954103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      'liked':[12,1,285,54,678,11,7,48946,64],
      'comments':[
        {
          "username":'roberto',
          "comment":"Podia ser melhor..."
        },  
      ]
    },
    {
      'id':3,
      'author':{
          'id':3,
          'username':'nicolasjleclercq',
          'photo':'https://images.unsplash.com/profile-1597655333848-643f36cefa2dimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff'
        },
      'image':'https://images.unsplash.com/photo-1597682497997-25dc681680f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=50',
      'liked':[12,1,285,54,678,44,11,7,48946,64],
      'comments':[]
    }
  ];
  

  




const Feed = () => {

  /*  const [ posts, setPosts ] = useState([]); 
    
    
    useEffect(() => {
      async function fetchData() {
        const {url, options } = PHOTOS_GET();
        const  response  = await fetch(url, options);
        const json = await response.json();
        
        setPosts(json)
    }
      fetchData();

    }, [])
  
   console.log(posts)*/
    return(
        <main id="feed">
            <div id="feed__container">
                {
                    posts && posts.map( post => (
                      <Post key={post.id} data={post} />
                    ))
                 }
            </div>
        </main>
    );
}

export default Feed;