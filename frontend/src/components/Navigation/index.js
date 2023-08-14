import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import logo from '../../assets/Yellow_Arrow_1.png';
import SearchBar from './SearchBar';                       
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as sessionActions from '../../store/session';
import AccountModal from '../Model/accountModel';

function Navigation({ setIsModalOpen,isModalOpen }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseOver = () => {
    // if (!isHovered)
    //   setIsHovered(true);
    // if (!isModalOpen)
    //   setIsModalOpen(true);
  };
  
  const handleMouseOut = () => {
    // setIsHovered(false);
    //  setIsModalOpen(false);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='div-logout' onClick={logout}>
        <div className="vertical-align" >
          <span> 
            Hello, {sessionUser.username}  
          </span>
          <span>
            <i class="fa-solid fa-right-from-bracket" ></i>     
          </span> 
        </div>
      {/* <button onClick={logout}>Log Out</button> */}
      </div>
    );
  } else {
    sessionLinks = (
      <div        
       onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <NavLink to="/login" className='link-login'>

        <div className="vertical-align">
          <span> 
            Welcome 
          </span>
          <span>
            Account & Login
          </span> 
        </div>
      </NavLink>
        {/* <p>
        Welcome, <NavLink to="/login" className='link-login'>Login</NavLink> for shopping
        </p> */}
      </div>
    );
  }

  return (
  <header id="container">
    <div id="nav-bar">
      <div id="nav-belt">
        <div className="nav-left">
          <div id="nav-logo">
            <NavLink exact to="/"><img id='img-logo' src={logo} alt=""></img></NavLink>
          </div>
        </div>
        <div className="nav-fill">
          <SearchBar/>
        </div>
        <div className="nav-right">
          <div id="nav-tools">
            {/* <a href="/">Log in</a> */}
            {sessionLinks}
            <a href="/">Cart</a>
          </div>
          {/* {isModalOpen  && (
            <div className="modal-overlay">
              <AccountModal isOpen={isModalOpen } />
            </div>
          )} */}
        </div>
      </div>
      {/* <div id="nav-main">
        <ul>
          <li><a href="/">xxx</a></li>
          <li><a href="#">Two</a>
            <ul class="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
        </ul>
      </div> */}
    </div>
  </header>
  );
}

export default Navigation;


