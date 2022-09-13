import React from 'react';
import logo from '../../images/logo-4x.png';
import './Navigation.css';
import { Link } from 'react-router-dom';


export default function Navigationbar() {
  

  return (
    <div className="header_container">
       <img className="contrax_logo" alt="contrax-logo" src={logo} />
       <Link to="/application" style={{ textDecoration: 'none' }}>
          <div className="enter_button">
            <p>Enter App</p>
          </div>
       </Link>
    </div>
  );
}
