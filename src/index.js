import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import "font-awesome/css/font-awesome.min.css";
import App from './App';
import { AuthContextProvider } from '../src/components/store/auth-context';



ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);