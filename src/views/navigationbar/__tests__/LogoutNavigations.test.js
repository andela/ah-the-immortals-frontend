import React from 'react';
import { Router, Link, NavLink, BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NavigationBar from '../NavigationBarContainer';

describe('Tests Logout Function', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({ signin: { isAuthenticated: true, user: { username: 'eric' } }, signup: {user: {}, errors: {}} });

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <NavigationBar signupdata={{}} />
      </BrowserRouter>
    </Provider>
  );
  it('handle logout', () => {
    const logoutLink = wrapper.findWhere(n => n.type() === NavLink && n.contains('Logout'));
    logoutLink.simulate('click', {
      preventDefault: jest.fn()
    });
    expect(logoutLink.length).toEqual(1);
  });
});
