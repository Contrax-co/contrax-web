import React from 'react';
import './dashboard.css';

export default function Dashboard(props: any) {

  return (
    <div className="dashboard">
      <div className="panel">
        <p className="panel_title">Total Liquidity</p>
      </div>

      <div className="panel">
        <p className="panel_title">Trade</p>
      </div>
      
      <div className="panel">
        <p className="panel_title">Pending Harvests</p>
      </div>
      
      <div className="panel">
        <p className="panel_title">Pools</p>
      </div>
      
    </div>
     
  );
}
