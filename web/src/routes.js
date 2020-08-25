import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Photo from './components/Photo/Photo';
import Feed from './pages/Feed/Feed';
import User from './pages/User/User';
import UserEdit from './pages/UserEdit/UserEdit';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

import PostUpload from './pages/PostUpload/PostUpload';

import { UserStorage }  from './components/UserContext/UserContext';


const Router = () => {
    return (
    
    <BrowserRouter>  
        <UserStorage>
            <Header/>
            <Routes  basename="/">   
                
                <Route path=""><Feed/></Route>

                <Route path="/user/:username">  <User/> </Route>
                <Route path="/user/p/:username"> <Photo/></Route>
                <Route path="/account/edit-profile"><UserEdit/></Route>

                <Route path="/post"><PostUpload/></Route>


                <Route path="/login"> <Login/> </Route>
                <Route path="/signup"> <SignUp/>  </Route>        
            </Routes>
        
        </UserStorage>
    </BrowserRouter>    
    
    )
}

export default Router;