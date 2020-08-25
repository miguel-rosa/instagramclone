import React, { useState, useContext } from 'react';
import './UserEdit.css'

import Container from '../../components/Container/Container';
import { UserContext } from '../../components/UserContext/UserContext';


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
    
    const { dataUser } = useContext(UserContext);

   
    
    const [user, setUser] = useState(
        {
            email: "",
            id:"" ,
            image:{
                url: ""
            },
            name: "miguel",
            username: "miguel"
        });

  
    
   
   console.log(dataUser)
    function handleInputChange(event){
        setUser({...user, [event.target.name]: event.target.value})
    }
    
    function handleFormSubmit(){

    }
    return(
        <Container >
            <form className="form-edit"onSubmit={handleFormSubmit}>
                <div>
                   <div>
                   <img src={user.image.src} alt={user.name}/>
                   </div> 
                   <div>
                    <p>{user.username}</p>
                   </div> 
                </div>
                
                <input type="file" />
                <label>Nome Completo</label>
                <input type="text" defaultValue={user.name}/>
                <label>Biografia</label>
                <textarea value="" />
                <button className="login__button"> Enviar </button>
            </form>
        </Container>
    )
}

export default UserEdit