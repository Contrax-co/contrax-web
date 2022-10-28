import logo from '../../images/logo-4x.png';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <div className="header_container">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className="contrax_logo" alt="contrax-logo" src={logo} />
      </Link>
      <Link to="/application" style={{ textDecoration: 'none' }}>
        <div className="enter_button">
          <p>Enter App</p>
        </div>
      </Link>
    </div>
  );
}
