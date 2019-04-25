import React from 'react';
import '../index.css';
import App from '../App';
import { Route, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'
import Resources from './Resources'
import Profiles from './Profiles'
import NotFound from './NotFound'
import Login from './Login'

export const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/resources" component={Resources} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

