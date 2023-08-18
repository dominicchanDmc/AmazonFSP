import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/sessionReducer";
import logo from '../../assets/Yellow_Arrow_1.png';
import { NavLink } from 'react-router-dom';
import './SignupForm.css';
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

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

  const handleLoginClick = (e) => {
    e.preventDefault()
    history.push('/login');
  };

  return (
    <section className="section-signUp bgcolor-white">
    <div className="logo">
    <NavLink exact to="/"><img id='signUp-logo' src={logo} alt=""></img></NavLink>
    </div>
    <div className="card-signUp">
      <h1>Sign Up</h1>
      <div className="form-signUp"> 
      <form onSubmit={handleSubmit}>  
        <label htmlFor="usernameInput">Your name</label>
        <input id="usernameInput"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
        <label htmlFor="emailInput"><b>Email</b> </label>
        <br/>
          <input
          id="emailInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label htmlFor="passwordInput">
          <b>Password</b>
          </label>
          <br/>
          <input
            id="passwordInput"
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
        <button type="submit" className='submitBtn'>Sign Up</button>
      <ul className="errorUl">
         {errors.map(error => <li key={error}><b>{error}</b></li>)}
      </ul>
      </form>
      </div>
      <p>
        By creating an account, you agree to Yellow Arrow's<Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice</Link>.
      </p>
      <div className="breck">
      </div>
      <div >
        <p>Already have an account?  
          <Link to="" onClick={handleLoginClick} className="loginDisplayStr">Login</Link>
        </p> 
      </div>
    </div>
  </section> 
  );
}

export default SignupFormPage;