import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TIXPLORE</div>
      <ul className="nav-links">
        <li>
          <Link to="Home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="Exhibits" smooth={true} duration={500}>Exhibits</Link>
        </li>
        <li>
          <Link to="VirtualTour" smooth={true} duration={500}>Virtual Tour</Link>
        </li>
        <li>
          <Link to="Membership" smooth={true} duration={500}>Membership</Link>
        </li>
        <li>
          <Link to="Feedback" smooth={true} duration={500}>Feedback</Link>
        </li>
        <li>
          <Link to="ContactUs" smooth={true} duration={500}>Contact Us</Link>
        </li>
      </ul>
      <button className="schedule-btn">Schedule Demo</button>
      <button className="signup-btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
