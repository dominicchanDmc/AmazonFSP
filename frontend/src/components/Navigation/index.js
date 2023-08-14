import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import logo from '../../assets/Yellow_Arrow_1.png';
import SearchBar from './SearchBar';                       
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as sessionActions from '../../store/session';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const categories =  [
    'All',
    'Amazon Devices',
    'Amazon Warehouse',
    'Apps & Games'
  ]
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <p>
      Hello, {sessionUser.username}
      </p>
      <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <p>
        Welcome, <NavLink to="/login" className='link-login'>Login</NavLink> for shopping
        </p>
      </>
    );
  }

  return (
    <nav className='nav-base'>
      <div><NavLink exact to="/"><img id='nav-logo' src={logo} alt=""></img></NavLink></div>
      <div className='nav-select-search'>          
        {/* <select
            name='categories'
            value={categories}
            className='nav-select'
        >
            {categories.map(categories =>
              <option key={categories}>{categories}</option>
            )}
        </select> */}
        <SearchBar/>
      </div>        
      <div>  {sessionLinks} </div>
      <div ><Link to="/cart" className='link-cart'><i className="fa-solid fa-cart-shopping"></i>cart</Link></div>
      <div></div>  
    </nav>
  );
}

export default Navigation;


