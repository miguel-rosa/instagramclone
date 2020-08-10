import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import Feed from './pages/Feed/Feed';
import User from './pages/User/User';
import Photo from './components/Photo/Photo';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const Routes = () => {
    return (
    <BrowserRouter>
        <Header/>
        <Route component={Feed} path="/" exact />
        <Route component={User} path="/account/:id" exact/>
        <Route component={Photo} path="/account/p/:id" exact />
        
        <Route component={Login} path="/login" exact/>
        <Route component={SignUp} path="/signup" exact/>
    </BrowserRouter>    
    )
}

export default Routes;