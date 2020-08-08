import React from 'react';
import './Header.css'

import imgLogo from '../../uploads/instagram-logo.png'

const Header = () =>{
    return(
      <header id="header">
        <div className="header__container">
          <a href="/">
            <img src={imgLogo} className="instagram-logo" alt="Logotipo" />
            </a>
          <p>Login</p>
          </div>
      </header>
    )
}

export default Header;