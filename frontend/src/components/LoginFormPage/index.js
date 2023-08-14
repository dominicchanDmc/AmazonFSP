import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/Yellow_Arrow_1.png';
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };
  const handleSignupClick = () => {
    history.push('/signup');
  };


  return (
      <div className="login-base">
        <NavLink exact to="/"><img id='login-logo' src={logo} alt=""></img></NavLink>
        <div className="login-container">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nameEmail">
              <b>Username or Email</b>
              </label>
              <br/>
              <input
                id="nameEmail"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            <br/>
            <label htmlFor="passwordInput">
              <b>Password</b>
            </label>
              <br/>
              <input
                id="passwordInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            <ul className="errorUl">
              {errors.map(error => <li key={error}><b>{error}</b></li>)}
            </ul>
            <button className='submitBtn' type="submit">Login</button>
            <br/>
            <br/>
            <button className='submitBtnDemo'
            onClick={(e)=>{
              setPassword('123456');
              setCredential('peter');
            }}>
            Login with Demo User</button>
          </form>
        </div>
        <div>
              New to Yellow Arrow?<br/>
              <button className='submitBtn'
              onClick={handleSignupClick}
              >
                Create your account
              </button>
        </div>
      </div>
  );
}

export default LoginForm;