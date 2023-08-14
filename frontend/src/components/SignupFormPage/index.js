import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import logo from '../../assets/Yellow_Arrow_1.png';
import { NavLink } from 'react-router-dom';
import './SignupForm.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <div className="signup-base">
     <NavLink exact to="/"><img id='signup-logo' src={logo} alt=""></img></NavLink>
        <div className="signup-container">
        <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="usernameInput">
              <b>Username</b>
              </label>
              <br/>
              <input
               id="usernameInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br/>
            <label htmlFor="emailInput"><b>Email</b> </label>
            <br/>
              <input
              id="emailInput"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <br/>
            <label htmlFor="confirmPasswordInput">
              <b>Confirm Password</b>
              </label>
              <br/>
              <input
              id="confirmPasswordInput"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <br/>
            <ul className="errorUl">
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <button type="submit" className='submitBtn'>Sign Up</button>
          </form>
        </div>
        <div>
            Already have an account?<br/>
            <button className='submitBtn'
              onClick={handleLoginClick}
              >
              Login
              </button>
        </div>
    </div>

  );
}

export default SignupFormPage;