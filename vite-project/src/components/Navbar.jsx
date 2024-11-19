
import React, { useState, useContext} from 'react';
import Alert from './Alert';
import { Link } from "react-router-dom";
import productContext from '../context/productContext';
import '../css/Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showProjectMenu, setShowProjectMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); 
  const context = useContext(productContext);
  const { state: { cart }} = context;

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
    setAlertMessage(darkMode ? 'Switched to Light Mode' : 'Switched to Dark Mode');
    setAlertType(darkMode ? 'light' : 'dark');
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  const toggleProjectMenu = () => {
    setShowProjectMenu(!showProjectMenu);
  };

  return (
    <>
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="navbar-container">
          <h1 className="navbar-logo">Brand</h1>
          <div className="hamburger" onClick={toggleMobileMenu}>
            ☰
          </div>
          <div className={`nav-links ${showMobileMenu ? 'show' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <div
              className="dropdown"
              onMouseEnter={toggleProjectMenu}
              onMouseLeave={toggleProjectMenu}
            >
              <span className="dropdown-toggle">Projects</span>
              {showProjectMenu && (
                <div className="dropdown-menu">
                  <Link to="/user">UserSystem</Link>
                  <Link to="/textmanipulator">TextManipulator</Link>
                </div>
              )}
            </div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to='/cartitem' className="cart-icon">
              🛒
              <span className="cart-count">{cart.length}</span>
            </Link>
          </div>
          <button className="mode-toggle" onClick={toggleMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        {showMobileMenu && (
          <div className="mobile-menu">
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
            <Link to="/signup" onClick={toggleMobileMenu}>Signup</Link>
            <Link to="/login" onClick={toggleMobileMenu}>Login</Link>
          </div>
        )}
      </nav>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
    </>
  );
};

export default Navbar;
