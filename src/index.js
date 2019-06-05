/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as polyfills from '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
