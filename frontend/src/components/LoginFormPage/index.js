import React, { useState } from "react";
import * as sessionActions from "../../store/sessionReducer";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/Yellow_Arrow_1.png';
import { NavLink } from 'react-router-dom';
import "./LoginForm.css";
import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;
  const handleContinue = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleDemo = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.login({ credential:'peter', password:'123456' }))
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

  const handleChangeback = (e) => {
    e.preventDefault();
    setCurrentStep(1);
    setErrors([]);
  };

  const handleFinish = (e) => {
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
    <section className="section-login">
      <div className="logo">
      <NavLink exact to="/"><img id='login-logo' src={logo} alt=""></img></NavLink>
      </div>
      <div className="card">
        <h1>Sign in</h1>
        <div className="form"> 
        <form>
        {currentStep === 1 && (
          <>
          <label htmlFor="nameEmail">Username or Email</label>
          <input id="nameEmail"
                 type="text"
                 value={credential}
                 onChange={(e) => setCredential(e.target.value)}
                 required
          />
          <button onClick={handleContinue}>Continue</button>
          </>
        )}
         {currentStep === 2 && (
          <>
          <div>
            <span >{credential}</span>
            <Link to="" onClick={handleChangeback} className="loginDisplayStr">Change</Link>
          </div>
          
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          <button onClick={handleFinish}>Finish</button>
          </>
        )}
        <ul className="errorUl">
           {errors.map(error => <li key={error}><b>{error}</b></li>)}
        </ul>
        </form>
        </div>
        <p>
          By continuing, you agree to Yellow Arrow's <Link to="">Conditions of Use</Link> and <Link to="">Privacy Notice</Link>.
        </p>
        <Link to="" className="icon">Need help?</Link>
        <button className='submitBtnDemo'
            onClick={handleDemo}>
        Login with Demo User</button>
      </div>

      <div className="breck">
        <p>New to Yellow Arrow?</p>
      </div>
      <div className="btn">
        <button onClick={handleSignupClick}>Create your Yellow Arrow account</button>
      </div>
      {/* <footer>
        <div className="links">
          <a href="">Conditions of Use</a>
          <a href="">Privacy Notice</a>
          <a href="">Help</a>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </footer> */}
    </section> 


      // <div className="login-base">
      //   <NavLink exact to="/"><img id='login-logo' src={logo} alt=""></img></NavLink>
      //   <div className="login-container">
      //     <h2>Log In</h2>
      //     <form onSubmit={handleSubmit}>
      //       <label htmlFor="nameEmail">
      //         <b>Username or Email</b>
      //         </label>
      //         <br/>
      //         <input
      //           id="nameEmail"
      //           type="text"
      //           value={credential}
      //           onChange={(e) => setCredential(e.target.value)}
      //           required
      //         />
      //       <br/>
      //       <label htmlFor="passwordInput">
      //         <b>Password</b>
      //       </label>
      //         <br/>
              // <input
              //   id="passwordInput"
              //   type="password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              //   required
              // />
      //       <ul className="errorUl">
      //         {errors.map(error => <li key={error}><b>{error}</b></li>)}
      //       </ul>
      //       <button className='submitBtn' type="submit">Login</button>
      //       <br/>
      //       <br/>
            // <button className='submitBtnDemo'
            // onClick={(e)=>{
            //   setPassword('123456');
            //   setCredential('peter');
            // }}>
      //       Login with Demo User</button>
      //     </form>
      //   </div>
      //   <div>
      //         New to Yellow Arrow?<br/>
      //         <button className='submitBtn'
      //         onClick={handleSignupClick}
      //         >
      //           Create your account
      //         </button>
      //   </div>
      // </div>
  );
}

export default LoginForm;