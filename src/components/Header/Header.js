import React, { useContext, useState } from 'react';
import './Header.css'

import {Link} from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

import { FaPlus as PlusIcon, FaRegUserCircle as UserIcon, FaCog as CogIcon   } from 'react-icons/fa'
import imgLogo from '../../uploads/instagram-logo.png'


const Header = () =>{

    const { dataUser, userLogout } = useContext(UserContext)
    const [ openPopup, setOpenPopup] = useState(false);

    return(
      <header id="header">
        <div className="header__container">
          <Link to='/'>
            <img src={imgLogo} className="instagram-logo" alt="Logotipo" />
            </Link>
          
            { dataUser ? (
              <div className="header__wrapper__user_infos">
                <div className="header__wrapper__user-image" to={`/user/${dataUser.username}`}>
                  <img onClick={() => setOpenPopup(!openPopup)} className="header__user-image" src={dataUser.image.url} alt="Foto do usuário"/> 
                  <div className="header__popup" style={openPopup ? {display:'flex'} : {display:'none'} }>
                    <div className="header__popup__triangle" />
                      <div onClick={() => setOpenPopup(false)} className="header__popup__items">
                        <Link className="popup__item" to={`/user/${dataUser.username}`}>
                            <UserIcon className="popup__item__ico" /> <span className="popup__item__text">Perfil </span>
                        </Link> 
                        <Link className="popup__item" to={`/post`}>
                            <PlusIcon className="popup__item__ico"/> <span className="popup__item__text"> Postar imagem </span>
                        </Link>
                        <Link className="popup__item" to="account/edit-profile">
                            <CogIcon className="popup__item__ico"/> <span className="popup__item__text"> Configurações </span>
                        </Link>
                        <div className="popup__item logout" onClick={userLogout}> 
                          Sair
                        </div>
                      </div>   
                </div>
                </div>
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