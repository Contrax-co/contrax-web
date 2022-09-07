import React, { useState, useEffect } from 'react';
import CompoundItem from './compoundItem';
import './compound.css';
import SideBar from './components/SideBar';

function Compound() {
  const [pools, setPools] = useState([]);

  // fetch the json of the pools and push them into an array for mapping
  useEffect(() => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        fetch(`https://testing.contrax.finance/api/pools.json`) //`http://localhost:3000/api/pools.json` or `https://testing.contrax.finance/api/pools.json` for when we want it done locally
          .then((response) => response.json())
          .then((data) => {
            setPools(data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="page">
      <div className="ac_page">
        <div className="sidebar">
          <SideBar />
        </div>

        <div className="farms">
          <p>Farms</p>
          <div className="pools_list">
            {pools.map((pool: any) => (
              <CompoundItem key={pool.id} pool={pool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compound;
