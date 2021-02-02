import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../resources/logo192.png';
import {useAuth0} from '@auth0/auth0-react';


function LoggedIn(props) {
 const {loginWithRedirect} = useAuth0();
  const handleClick = () => {
      loginWithRedirect();
  }

  return (
    <ul className="ulgap">
            <li className="signin"> 
              <span className="text-blue btnv-3" onClick={handleClick}>
               Log In
              </span>         
            </li>
          </ul> 
  )
}

function LoggedOut(props) {
    const {logout} = useAuth0();
     const handleClick = () => {
         logout();
     }
    const email = props.user.email;
     return (
       <ul className="ulgap">

               <li> 
                 <span>
                 {email}
                 </span>         
               </li>
               <li className="signin"> 
                 <span className="text-blue btnv-3" onClick={handleClick}>
                 Log Out 
                 </span>         
               </li>
             </ul> 
     )
}
   


const Header = () =>  {
  
    const {isAuthenticated,user} = useAuth0();
    return (  
      <header className="header">
      <nav className="nav">
          <a href="/" className="holder-logo">
            <img className='logo' src={logo} alt='header'></img>
          </a> 
            <div className="header-links full-height">
            {isAuthenticated ? <LoggedOut user={user}></LoggedOut>:<LoggedIn></LoggedIn>}
            <ul id="nav-mid">
                <li>
                <NavLink className="btn-nvt-gm" to="/home">
                 Home
                </NavLink>
                </li>
                <li>
                <NavLink className="btn-nvt-gm" to="/AboutUs">
                About Us
                </NavLink>
                </li>         
            </ul>
          </div>   
        </nav>
      </header>
      ); 
  }
 export default Header;
