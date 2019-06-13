import React from 'react';
import { Router, NavLink } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import toJson from 'enzyme-to-json';
import SignedInLinks from '../signedInLinks';

describe('Tests rendering of links on navigation bar when the user is logged in', () => {
  const history = createBrowserHistory();
  const mockHandleLogout = jest.fn;
  const username = '';
  const wrapper = mount(
    <Router history={history}>
      <SignedInLinks 
        handleLogout={mockHandleLogout}
        username={username}
      />
    </Router>

  );
  it('renders signed in links component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('handle logout', () => {
    const logoutBtn = wrapper.findWhere(n => n.type() === NavLink && n.contains('Logout'));
    expect(logoutBtn.length).toEqual(1);
  });
});
