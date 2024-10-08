//import './index.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import axios from "axios"
//axios.defaults.baseURL='http://localhost:3001'
 axios.defaults.baseURL='https://dogs-project-backend-production.up.railway.app'
 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>

    </BrowserRouter>
 </Provider>,
document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
