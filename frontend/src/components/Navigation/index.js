import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from '../../assets/Yellow_Arrow_1.png';
import SearchBar from './SearchBar';                       
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const categories =  [
    'All',
    'Amazon Devices',
    'Amazon Warehouse',
    'Apps & Games'
  ]

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <p>
        Welcome Guest, <NavLink to="/login" className='link-login'>Login</NavLink> for shopping
        {/* Welcome Guest, <NavLink to="/login">Login</NavLink> for shopping */}
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


