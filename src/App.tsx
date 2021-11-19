import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard';
import CreateToken from './pages/createToken';

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
        </Switch>
    </Router>
  );
}

export default App;
