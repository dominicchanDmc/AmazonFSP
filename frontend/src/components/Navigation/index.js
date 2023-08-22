import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import logo from '../../assets/Yellow_Arrow_1.png';
import shoppingCart from "../../assets/cart.png";
import SearchBar from './SearchBar';                       
import * as sessionActions from '../../store/sessionReducer';
import { fetchCartItemsByUserId, selectUserCartItems} from '../../store/cartItemsReducer'

// import AccountModal from '../Model/accountModel';

function Navigation({ setIsModalOpen,isModalOpen }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const cartItems = useSelector(selectUserCartItems)
  let cartItemsCount;
  if (cartItems && Object.keys(cartItems).length > 0)
    cartItemsCount = Object.values(cartItems).reduce
    ((total, cartItem) => total + cartItem.quantity, 0);

  // const [cartItems, setCartItems] = useState([]);
  // const [isHovered, setIsHovered] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (sessionUser) {
      dispatch(fetchCartItemsByUserId(sessionUser.id))
      // fetchUserCartItems(sessionUser.id);
    }
  }, [sessionUser]);

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
      <div className='div-logout' >
        <div className="dropdown">
          <div className="vertical-align" >
            <span> 
              Hello, {sessionUser.username}  
            </span>
            <span >
              Account & List
              <i className="fa fa-caret-down leftPadding" aria-hidden="true"></i>
            </span> 
          </div>
          <div className="dropdown-content">
            <NavLink to="">Order History</NavLink>
            <NavLink to="">Review List</NavLink>
            <NavLink to="" onClick={logout}>Logout</NavLink>
          </div>
        </div>
        <NavLink to="" >
          <div className="vertical-align">
              <span> 
                Returns 
              </span>
              <span>
                <b>& Orders</b>
              </span> 
          </div>
        </NavLink>
      </div>
    );
  } else {
    sessionLinks = (
      <div        
       onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className='link-login'>
        <div className="dropdown">
          <NavLink to="/login" >

            <div className="vertical-align">
              <span> 
                Welcome 
              </span>
              <span>
                <b>Account</b>
                <i className="fa fa-caret-down leftPadding" aria-hidden="true"></i>
              </span> 
            </div>
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
        <NavLink to="/login" >
          <div className="vertical-align">
              <span> 
                Returns 
              </span>
              <span>
                <b>& Orders</b>
              </span> 
          </div>
        </NavLink>
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
            {sessionLinks}
            <div className="cart">
              <Link to="/cart" className='link-cart'>
                <div>
                  {cartItemsCount && cartItemsCount > 0 && (
                  <div className="cart-count">{cartItemsCount}</div>
                  )}
                  <img
                  src={shoppingCart}
                  alt="shopping cart"
                  className="cart-icon"
                />
                </div>
              </Link>
              <p><b>Cart</b>
              </p>
            </div>
          </div>
          {/* {isModalOpen  && (
            <div className="modal-overlay">
              <AccountModal isOpen={isModalOpen } />
            </div>
          )} */}
        </div>
      </div>
    </div>
  </header>
  );
}

export default Navigation;


