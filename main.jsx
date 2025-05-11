import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { StrictMode } from 'react'; // ❌ This line causes duplicate import

// ✅ Fix: Use React.StrictMode directly instead of importing separately

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
