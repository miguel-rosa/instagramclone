import React, { useContext } from 'react';
import './Header.css'

import {Link} from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

import { FaPlus } from 'react-icons/fa'
import imgLogo from '../../uploads/instagram-logo.png'


const Header = () =>{

    const { dataUser } = useContext(UserContext)

    return(
      <header id="header">
        <div className="header__container">
          <Link to='/'>
            <img src={imgLogo} className="instagram-logo" alt="Logotipo" />
            </Link>
          
            { dataUser ? (
              <div className="header__wrapper__user_infos">
                <Link className="header__wrapper__user-image" to={`/account/${dataUser.id}`}>
                  <img className="header__user-image" src={dataUser.image.url} alt="Foto do usuário"/> 
                </Link>
                <Link className="header__wrapper__user-image" to={`/account/${dataUser.id}`}>
                  <FaPlus/>
                </Link>
              </div>
            ) : (
            <Link  to="/login" >
              <p>Login</p>
              </Link> 
            )
            }             
          </div>
      </header>
    )
}

export default Header;