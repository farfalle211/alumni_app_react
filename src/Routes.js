import React from 'react';
import './index.css';
import App from './App';
import { Route, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'
import Resources from './views/Resources'
import Profiles from './views/Profiles'
import NotFound from './views/NotFound'
import Login from './views/Login'

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

