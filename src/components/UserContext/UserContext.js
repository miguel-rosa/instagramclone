import React, { createContext, useState , useEffect} from 'react';

import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from '../../api'

export const UserContext = createContext();

export const UserStorage = (props) => {

    const [dataUser, setDataUser ] = useState(null);
    const [login, setLogin] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function autoLogin(){
            const token = window.localStorage.getItem('token');
            if(token){
                try{
                    setError(null);
                    const {url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if(!response.ok) throw new Error('Token Inválido');
                    await getUser(token)
                } catch (error){

                } finally {

                }
            }
        }
        autoLogin();
    }, []);

    async function userLogin(formData){
        const { username, password } = formData;
        console.log(formData);
        const { url, options } = TOKEN_POST({username, password});

        const response = await fetch(url, options);
        const { token } = await response.json();
        window.localStorage.setItem('token', token);
        console.log(token)
        getUser(token)
    }

    async function getUser(token){
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log('getting user')
        console.log(json);
        setDataUser(json);
        setLogin(true);
    }

    return(
        <UserContext.Provider value={{ userLogin, dataUser, login }}>
            {props.children}
        </UserContext.Provider> 
    )
};