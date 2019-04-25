import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route,
          NavLink, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import { Routes } from './components/Routes'

// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <NavLink exact activeClassName="active" to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/login">Login</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/profiles">Profiles</NavLink>
//         </li>
//         <li>
//           <NavLink activeClassName="active" to="/resources">Resources</NavLink>
//         </li>
//       </ul>
//       <hr />
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/login" component={Login} />
//         <Route path="/profiles" component={Profiles} />
//         <Route path="/resources" component={Resources} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// )

ReactDOM.render(<Router>
                  <Routes />
                </Router>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
