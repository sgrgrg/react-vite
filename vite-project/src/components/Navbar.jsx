import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState('');

  const toggleMode = () => {
    if (darkMode) {
      setDarkMode(false);
      setAlert('Switched to Light Mode');
    } else {
      setDarkMode(true);
      setAlert('Switched to Dark Mode');
    }


    setTimeout(() => {
      setAlert('');
    }, 3000);
  };

  return (
    <nav className={darkMode ? 'navbar dark' : 'navbar light'}>
      <h1>Navbar</h1>
      <button onClick={toggleMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {alert && <div className="alert">{alert}</div>}
    </nav>
  );
};

export default Navbar;
