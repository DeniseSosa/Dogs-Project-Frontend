//import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage'
const App= ()=> {
  return (
    <div className="App">
      <h1>Henry Dogs</h1> 
      <BrowserRouter>
      <Switch>
        <Route  exact path="/" component={LandingPage}/>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
