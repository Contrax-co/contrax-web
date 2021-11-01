import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

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
        </Switch>
    </Router>
  );
}

export default App;
