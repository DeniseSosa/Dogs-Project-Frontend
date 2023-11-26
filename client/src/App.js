//import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
const App= ()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  exact path="/home" component={Home}/>
        <Route exact path= "/dogs/:id" component={Detail} />
        <Route exact path= "/temperaments" component= {Form}/>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
