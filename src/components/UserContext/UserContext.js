import React, { useCallback, createContext, useState , useEffect} from 'react';
import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from '../../api';
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
            if(!response.ok) throw new Error(`Usuário inválido`);
            const { token } = await response.json();
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
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
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
        <UserContext.Provider value={{ userLogin, dataUser, login, userLogout, error, loading }}>
            {props.children}
        </UserContext.Provider> 
    )
};