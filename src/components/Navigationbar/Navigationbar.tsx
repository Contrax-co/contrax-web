import logo from '../../images/logo-4x.png';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <div className="header_container">
      <Link to="/">
        <img className="contrax_logo" alt="contrax-logo" src={logo} />
      </Link>
      {/* TODO - Re-add link to 'Enter App' once beta is ready */}
      {/* <Link to="/application"> */}
      <div className="enter_button inactive-btn text-center">
        <p>Enter App</p>
        <p className="text-shrink">(Coming Soon)</p>
      </div>
      {/* </Link> */}
    </div>
  );
}
