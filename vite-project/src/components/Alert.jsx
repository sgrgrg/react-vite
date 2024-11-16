import React from 'react';

const Alert = ({ message, type }) => {
  const alertStyle = {
    backgroundColor: type === 'light' ? 'yellow' : 'green',
    color: type === 'light' ? 'black' : 'white',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '4px',
    marginTop: '1rem',
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;
