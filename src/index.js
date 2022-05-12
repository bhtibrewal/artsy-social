import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from './redux/store';
import { Provider } from 'react-redux';
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
            <Provider store={store}>
              <App />
            </Provider>
          </PostsProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>
);



