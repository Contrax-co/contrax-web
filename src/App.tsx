import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard';
import CreateToken from './pages/createToken';
import ManageToken from './pages/manageToken';
import Exchange from './pages/exchange';
import ExplorePool from './pages/explorePool';
import CreatePool from './pages/createPool';
import PoolDetail from './pages/poolDetail';
import Compound from './pages/CompoundEarn/compound';

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
            <Route exact path='/exchange'>
              <Exchange />
            </Route>
            <Route exact path='/explore-pool'>
              <ExplorePool />
            </Route>
            <Route exact path='/create-pool'>
              <CreatePool />
            </Route>
            <Route exact path='/pool-detail'>
              <PoolDetail />
            </Route>
            <Route exact path='/compound'>
              <Compound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
