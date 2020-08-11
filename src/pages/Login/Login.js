import React, {useState, useContext} from 'react';
import './Login.css';

import { Link, Navigate } from 'react-router-dom';

import imgLogo from '../../uploads/instagram-logo.png';

import { UserContext } from '../../components/UserContext/UserContext';

import Error from '../../components/Helper/Error';

const Login = () => {

    const { userLogin, error, loading, login, dataUser } = useContext(UserContext);

    const [formData , setFormData] = useState({'username':'','password':''})
    
    if(login === true ) return <Navigate to={`/user/${dataUser.username}`}/>

    function handleInputChange(event){
        const { name, value } = event.target;
        setFormData({...formData , [name]:value });
    }

    async function sendForm(event){
        event.preventDefault();
        userLogin(formData);
    }  

    return (
        <main className="form-sign">
            <div className="form-sign__container">
                <form onSubmit={sendForm} className="sign__form">
                    <img src={imgLogo} alt="Instagram"/>
                        <div className="sign__wrapper">
                            <input name="username" onChange={handleInputChange} id="login__user" type="text"  required/>
                            <label htmlFor="login__user">Telefone, nome de usuário ou email</label>
                        </div> 
                        <div className="sign__wrapper">
                            <input name="password" onChange={handleInputChange} required id="login__password" type="password"  />
                            <label htmlFor="login__password">Senha</label>
                        </div>    
                        {loading ? <button className="login__button" type="submit" disabled>Entrar</button> : <button className="login__button"type="submit" value="Entrar">Entrar</button>}
                        <div className="message">
                            <Error error={error} />
                        </div>
                    </form>
                <div className="other-action">
                    Não tem uma conta? <Link className="link-text" to='signup'> Cadastre-se</Link>
                </div>
            </div>
        </main>   
        
    )
}

export default Login;