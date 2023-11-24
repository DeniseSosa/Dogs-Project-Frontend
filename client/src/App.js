//import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
const App= ()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route></Route>
        <Route></Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
