import React from 'react';
import './index.css'; 
// import { Button } from 'react-bootstrap';
import Button from '../Button/index.js';
import logo from '../../../src/images/logo-no-background.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logoimage" src={logo} alt="logo"/> 
      </div>

      <ul className="nav-links">
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Home</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">About</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Courses</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Contact Us</a></li>
      </ul>
      <Button label="Login" onClick={() => { /* Handle login button click */ }} />

    </nav>
  );
}

export default Navbar;
