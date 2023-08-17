import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/ProductIndex';
import LoginFormPage from './components/LoginFormPage';
import './App.css'
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CartIndex from './components/CartIndex/CartIndex';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import CategoryIndex from './components/CategorieIndex';
// import AccountModal from './components/Model/accountModel';

function App() {
  const location = useLocation();
  const isNavigationVisible = ['/', '/cart','/404','/category'].includes(location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
       {isNavigationVisible && <Navigation setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>}
      <Switch>
        <Route exact path="/">
          <ProductIndex />
        </Route>
        <Route path="/signup">
            <SignupFormPage />
        </Route>
        <Route path="/login">
            <LoginFormPage />
        </Route>
        <Route path="/cart">
            <CartIndex />
        </Route>
        <Route path="/category">
            <CategoryIndex />
        </Route>
        <Route path="/404" component={NotFoundPage} />
        <Route component={NotFoundPageWithNavigation} />
      </Switch>   
      {/* <div className="modal-overlay"> */}
        {/* {isModalOpen && <AccountModal isOpen={isModalOpen} />} */}
      {/* </div> */}
  
    </>
  );
}
function NotFoundPageWithNavigation() {
  return (
    <>
      <Navigation />
      <NotFoundPage />
    </>
  );
}
export default App;
