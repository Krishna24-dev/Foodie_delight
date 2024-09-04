import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importing the CSS file
import App from './App';  // Importing the App component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
