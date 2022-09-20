import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateToken from './pages/createToken';
import ManageToken from './pages/manageToken';
import Exchange from './pages/exchange';
import ExplorePool from './pages/explorePool';
import CreatePool from './pages/createPool';
import PoolDetail from './pages/poolDetail';
import Application from './pages/Application/Application';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/application" element={<Application />}/>

        <Route path="/create-a-token" element={<CreateToken />} />

        <Route path="/manage-token" element={<ManageToken />} />

        <Route path="/exchange" element={<Exchange />} />

        <Route path="/explore-pool" element={<ExplorePool />} />

        <Route path="/create-pool" element={<CreatePool />} />

        <Route path="/pool-detail" element={<PoolDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
