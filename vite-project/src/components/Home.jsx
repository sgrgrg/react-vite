import React, { useState } from 'react';
import Alert from './Alert';

const Home = () => {
  const [text, setText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleUppercase = () => {
    const updatedText = text.toUpperCase();
    setText(updatedText);
    showAlert('Converted to Uppercase', 'success');
  };

  const handleLowercase = () => {
    const updatedText = text.toLowerCase();
    setText(updatedText);
    showAlert('Converted to Lowercase', 'success');
  };

  const handleClear = () => {
    setText('');
    showAlert('Text cleared', 'warning');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert('Text copied to clipboard', 'success');
    }).catch(() => {
      showAlert('Failed to copy text', 'danger');
    });
  };

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage('');
      setAlertType('');
    }, 3000);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/g).length;
  const characterCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2); 

  return (
    <div className="home-container">
      <h1>Text Manipulator</h1>
      <textarea
        className="text-area"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="button-container">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div className="text-info">
        <p><strong>Word Count:</strong> {wordCount}</p>
        <p><strong>Character Count:</strong> {characterCount}</p>
        <p><strong>Average Reading Time:</strong> {readingTime} minutes</p>
        <h2>Preview:</h2>
        <p className="text-preview">{text || 'Nothing to preview...'}</p>
      </div>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
    </div>
  );
};

export default Home;
