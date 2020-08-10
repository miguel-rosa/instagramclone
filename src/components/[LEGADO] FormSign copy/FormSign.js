import React from 'react';
import './FormSign.css';

import { Link } from 'react-router-dom';

import imgLogo from '../../uploads/instagram-logo.png';

const FormSign = (props) => {
    
    const [formData , setFormData] = useState({
        'username':'',
        'user_name':'',
        'email':'',
        'password':''
    })

    async function sendForm(event){
      
        const response = await fetch(
          `http://apidogs.combr/json/v1/user`,
        );
        const json = await response.json();
        console.log(json);
    }

    function handleInputChange(event){
        
        const { name, value } = event.target;
        
        setFormData({...formData , [name]:value )};
    }
    
    return(
        <main className="form-sign">
            <div className="form-sign__container">
                <form onSubmit={sendForm} className="sign__form">
                    <img src={imgLogo} alt="Instagram"/>
                        {props.children}
                    <button className="login__button"type="submit" value="Entrar">Entrar</button>
                </form>
                <div className="other-action">
                {props.text} <Link className="link-text" to={props.link}> { props.linkText}</Link>
                </div>
            </div>
            
        </main>    
    )
}

export default FormSign;