import React, { useState } from 'react';
import Alert from './Alert';
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showProjectMenu, setShowProjectMenu] = useState(false);

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      setAlertMessage('Switched to Light Mode');
      setAlertType('light');
    } else {
      setDarkMode(true);
      setAlertMessage('Switched to Dark Mode');
      setAlertType('dark');
    }

    // Clear the alert message after 3 seconds
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
      <nav className={darkMode ? 'navbar dark' : 'navbar light'}>
        <h1>Navbar</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <div className="dropdown" onMouseEnter={toggleProjectMenu} onMouseLeave={toggleProjectMenu}>
            <span className="dropdown-toggle">Project</span>
            {showProjectMenu && (
              <div className="dropdown-menu">
                <Link to="/user">UserSystem</Link>
                <Link to="/textmanipulator">TextManipulator</Link>
              </div>
            )}
          </div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
        <button onClick={toggleMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
    </>
  );
};

export default Navbar;
