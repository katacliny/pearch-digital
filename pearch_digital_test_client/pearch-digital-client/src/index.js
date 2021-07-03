import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateUser from '../src/components/CreateUser';
import Home from '../src/components/Home';
import Logout from '../src/components/Logout';
import UserDetails from '../src/components/UserDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/create-user" component={CreateUser} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/user-details" component={UserDetails} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
