import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

const store = configureStore([thunk])({
  resetpasswordlink: {},
  confirmresetpassword: {},
  signup: {},
  signin: {},
  social: {},
  Profile: {},
  post: {},
  errors: {},
  search: {},
  followers: {},
  following: {},
  prompt: {}
});
describe('PASSES', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
