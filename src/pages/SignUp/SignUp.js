import React, { useState , useContext} from 'react';
import './SignUp.css';

import { USER_POST } from '../../api';
import { UserContext } from '../../components/UserContext/UserContext';
import { Link /*, Redirect */} from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import imgLogo from '../../uploads/instagram-logo.png';



const SignUp = () => {
    
    const { userLogin } = useContext(UserContext);
    const { loading, error, request } = useFetch();


    const [formData , setFormData] = useState({
        'username':'',
        'user_name':'',
        'email':'',
        'password':''
    })

    function handleInputChange(event){
        const { name, value } = event.target;
        console.log(name, value)
        setFormData({...formData , [name]:value });
    }

    async function sendForm(event){
        event.preventDefault();

        const { url, options } = USER_POST(formData);

        const { response }= await request(url, options);
        
        if(response.ok) userLogin(formData)       
        
    }

    return (
        <main url="user">
            <div className="form-sign">
                <div className="form-sign__container">
                    <form onSubmit={sendForm} className="sign__form">
                        <img src={imgLogo} alt="Instagram"/>
                        <div className="sign__wrapper">
                            <input id="signup__mail" type="text" name="email" onChange={handleInputChange} required/>
                            <label htmlFor="signup__mail">Número do celular ou email</label>
                        </div> 
                        <div className="sign__wrapper">
                            <input name="user_name" onChange={handleInputChange} id="signup__name" type="text"  required/>
                            <label htmlFor="signup__name">Nome Completo</label>
                        </div> 
                        <div className="sign__wrapper">
                            <input name="username" onChange={handleInputChange} id="signup__username" type="text"  required/>
                            <label htmlFor="signup__username">Nome de usuário</label>
                        </div> 
                        <div className="sign__wrapper">
                            <input name="password" onChange={handleInputChange} required id="signup__passoword" type="password"  />
                            <label htmlFor="signup__passoword">Senha</label>
                        </div>
                            { loading ? (
                                <button className="login__button"type="submit" disabled >Entrar</button>
                            ):(
                                <button className="login__button"type="submit" value="Entrar">Entrar</button>
                            )
                            }
                        <div className="message">
                            { error && <p>{error}</p> }
                        </div>
                    </form>
                    <div className="other-action">
                    Já tem uma conta?<Link className="link-text" to="login"> Conecte-se</Link>
                    </div>
                </div>
            </div>    
        </main>
    )
}

export default SignUp;