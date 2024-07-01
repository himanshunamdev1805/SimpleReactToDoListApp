// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Import global styles
import App from './App'; // Import main App component
import { Provider } from 'react-redux'; // Import Provider to connect Redux store with React
import store from './redux/store'; // Import the Redux store

// Create root element and render App component with Redux Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
