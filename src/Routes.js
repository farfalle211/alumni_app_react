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
import Profile from './views/Profile'
import NewProfile from './views/NewProfile'
import EditProfile from './views/EditProfile'
import ComponentsViewer from './views/ComponentsViewer'
import AuthenticatedComponent from './components/AuthenticatedComponent'

export const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <AuthenticatedComponent>
              <Route exact path="/" component={App} />
              <Route exact path="/profiles" component={Profiles} />
              <Route path="/profiles/new" component={NewProfile} />
              <Route path="/profiles/:userId/edit" component={EditProfile} />
              <Route path="/profiles/:userId" component={Profile} />
              <Route path="/resources" component={Resources} />
              <Route path="/login" component={Login} />
              <Route path="/components" component={ComponentsViewer} />
            </AuthenticatedComponent>
              <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

