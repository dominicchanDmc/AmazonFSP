import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/ProductIndex/ProductIndex';
import LoginFormPage from './components/LoginFormPage';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <ProductIndex />
        </Route>
        <Route path="/login">
            <LoginFormPage />
        </Route>
        <Route path="/signup">
            <SignupFormPage />
        </Route>
      </Switch>     
    </>
  );
}

export default App;
