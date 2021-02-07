import React, { useCallback, createContext, useState , useEffect} from 'react';
import { USER_GET_LOGIN, TOKEN_POST, TOKEN_VALIDATE_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = (props) => {

    const [dataUser, setDataUser ] = useState(null);
    const [login, setLogin] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const userLogout = useCallback(async function(){
        setDataUser(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        navigate('/login');
        window.localStorage.removeItem('token');
    }, [navigate])

    async function userLogin(formData){
        try{
            setError(null);
            setLoading(true);
            const { username, password } = formData;  
            
            const { url, options } = TOKEN_POST({username, password});
            const response = await fetch(url, options);
            console.log('response token post', response)
            if(!response.ok) throw new Error(`Usuário ou senha inválidos`);
            const { token } = await response.json();
            console.log('token', token)
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate(`/user/${username}`);
            
        } catch(err){
            setError(err.message);
            setLogin(false);
        } finally{
            setLoading(false);
        }
        
    }

    async function getUser(token){
        const {url, options} = USER_GET_LOGIN(token);
        const response = await fetch(url, options);
        console.log('response user', response)
        if(!response.ok) throw new Error("Usuário ou senha inválidos")
        const json = await response.json();
        setDataUser(json);
        setLogin(true);
    }

    useEffect(() => {
        async function autoLogin(){
            const token = window.localStorage.getItem('token');

            if(token){
                try{
                    setError(null);
                    setLoading(true);
                    console.log('token do if', token)
                    const {url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if(!response.ok) throw new Error('Token Inválido');
                    await getUser(token)
                } catch (err){
                    setError(err);
                    userLogout();
                } finally {
                    setLoading(false)
                }
            }
        }
        autoLogin();
    }, [userLogout]);

    return(
        <UserContext.Provider value={{ setDataUser, userLogin, dataUser, login, userLogout, error, loading }}>
            {props.children}
        </UserContext.Provider> 
    )
};