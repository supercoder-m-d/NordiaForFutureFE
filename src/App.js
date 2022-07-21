
import React from 'react';
import {Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Layout from './layout/index';
function App() {
  
  
  return (
      <BrowserRouter>
          <Switch>
            <Layout exact path="/" name="Home" component={Home} />
          </Switch>
    </BrowserRouter>
    
  );
}

export default App;
