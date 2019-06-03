/*jshint esversion: 6 */
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as polyfills from '@babel/polyfill';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
