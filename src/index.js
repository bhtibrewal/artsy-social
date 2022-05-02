import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider, AuthProvider, PostsProvider } from './contexts';

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>
);



