import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import CreateToken from './pages/createToken';
import ManageToken from './pages/manageToken';

function App() {
  return (
    <Router>
       <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
            <Route exact path='/create-a-token'>
              <CreateToken />
            </Route>
            <Route exact path='/manage-token'>
              <ManageToken />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
