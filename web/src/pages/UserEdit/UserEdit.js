import React, { useState, useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './UserEdit.css'

import Container from '../../components/Container/Container';
import { UserContext } from '../../components/UserContext/UserContext';

import { USER_PUT } from '../../api';
import useFetch from '../../hooks/useFetch';

/*
 email: "",
 id:"" ,
 image:{
    url: ""
 },
 name: "",
 username: "",
*/


const UserEdit = () => {  
    
    const navigate = useNavigate();
    const { dataUser, setDataUser } = useContext(UserContext);
    const [user, setUser] = useState(dataUser);
    const [image, setImage] = useState('')

    const {/* loading, error,*/ request } = useFetch();

    useEffect(() => {
        setUser(dataUser)
        console.log('dataUser', dataUser)
    },[dataUser])
   
   console.log(dataUser)

    function handleFileInputChane(event){
        setUser({
            ...user,
            image:URL.createObjectURL(event.target.files[0])
        });
        setImage(event.target.files[0])
    }

    function handleInputChange(event){
        setUser({...user, [event.target.name]: event.target.value})
        console.log('user', user)
        console.log([event.target.name], event.target.value)
    }
    
    async function handleFormSubmit(event){
        event.preventDefault();

        const token = window.localStorage.getItem('token');
        const formData = new FormData();
        
        formData.append('image', image);
        formData.append('name', user.name)
        formData.append('description', user.description);

        console.log(formData.get('name'), formData.get('description'));
        
        const { url, options } = USER_PUT(user.id, formData, token);
        const { response } = await request(url, options);
        
        if(response.ok){ 
            setDataUser(user)
            navigate(`/user/${dataUser.username}`)
        }
    }

    return(
        <Container >
            <form className="form-edit" onSubmit={handleFormSubmit}>
                <div>
                   <div>
                   <img className="form-edit__image" src={user.image} alt={user.name}/>
                   </div> 
                   <div>
                    <p>{user.username}</p>
                   </div> 
                </div>
                
                <input type="file" onChange={handleFileInputChane}/>
                <label>Nome Completo</label>
                <input name="name" type="text" onChange={handleInputChange} defaultValue={user.name}/>
                <label>Biografia</label>
                <textarea name="description" onChange={handleInputChange} defaultValue={user.description}/>
                <button className="login__button"> Enviar </button>
            </form>
        </Container>
    )
}

export default UserEdit