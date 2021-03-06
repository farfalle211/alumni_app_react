    
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,
          NavLink, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'
import axios from 'axios'
import * as serviceWorker from './serviceWorker';

import { Routes } from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'



axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

ReactDOM.render(<Router> 
                  <Header />
                  <Routes />
                  <Footer />
                </Router>,
                document.getElementById('root')
               );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
