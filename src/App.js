import React from 'react';
import './App.css';
import Login from './components/login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Index from './components/index/Index';
import Menu from './components/layout/Menu';
import {BrowserRouter as Router}  from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import RouterUI from './router/routerUI';
import TagIndex from './components/layout/tagIndex';

const App = () => {
  const {  isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? 
    <Router>
    <div>
      <Menu/>
      <div className="container-right-index2-left">
        <Header/>
        <TagIndex/>
          <RouterUI>
            <Index/>
          </RouterUI>
        <Footer/>
      </div>
    </div>
    </Router>
    : <Login/>
  )
}
export default App;
