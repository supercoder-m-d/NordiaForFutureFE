
import React from 'react';
import {Switch, BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Layout from './layout/index';
import NFT from './pages/nft/index';
import Team from './pages/team/index';
import About from './pages/about/index';
import RoadMap from './pages/roadmap/index';
import Home from './pages/home/index';
function App() {
  
  
  return (
      <BrowserRouter>
          <Switch>
            <Layout exact path='/' name="Home" component={Home} />
            <Layout exact path='/team' name="Team" component={Team} />
            <Layout exact path='/about' name="About" component={About} />
            <Layout exact path='/roadmap' name="RoadMap" component={RoadMap} />
            <Layout exact path="/nft" name="NFT" component={NFT} />
          </Switch>
      </BrowserRouter>
    
  );
}

export default App;
