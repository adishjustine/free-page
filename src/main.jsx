import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';  // If you have global CSS

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
