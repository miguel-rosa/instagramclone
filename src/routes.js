import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Feed from './pages/Feed/Feed';
import User from './pages/User/User';
import Photo from './components/Photo/Photo';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import { UserStorage }  from './components/UserContext/UserContext';


const Router = () => {
    return (
    
    <BrowserRouter>  
        <UserStorage>
            <Header/>
            <Routes  basename="/">
                
                <Route exact path=""><Feed/> </Route>
                <Route exact path="/user/:username">  <User/> </Route>
                <Route path="/user/p/:username"> <Photo/></Route>
            
                <Route exact path="/login"> <Login/> </Route>
                <Route exact path="/signup"> <SignUp/>  </Route>
            </Routes>
        </UserStorage>
    </BrowserRouter>    
    
    )
}

export default Router;