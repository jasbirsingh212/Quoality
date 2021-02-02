import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import SideNav from './SideNav';
import Content from './Content';
import {BrowserRouter,Route} from 'react-router-dom';
import Newinvoice from './Newinvoice';

function Logged() {
        
        return (
            
            <BrowserRouter>
            <SideNav></SideNav>
            <Content></Content>
            </BrowserRouter>            
            
        )
}
function NotLogged() {
    return <h1>Please login </h1>
}

function Home() {
    const {isAuthenticated} = useAuth0();
    return (
        <div className= 'home'>
        {!isAuthenticated ? <NotLogged></NotLogged> : <Logged></Logged>}
        </div>
    )
}



export default Home;
