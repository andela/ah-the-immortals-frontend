import React from 'react';
import { Router, NavLink } from 'react-router-dom';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import toJson from 'enzyme-to-json';
import SignedInLinks from '../signedInLinks';

describe('Tests rendering of links on navigation bar when the user is logged in', () => {
  const history = createBrowserHistory();
  const mockHandleLogout = jest.fn;
  const mockHandleClick = jest.fn;
  const mockHandleClear = jest.fn;
  const username = '';
  const notifications = [
    {
      'id': 13,
      'unread': false,
      'verb': 'article_created',
      'timestamp': '2019-06-19 11:45:49',
      'description': 'barclay.koin posted an article "TESTING FOR GOT" on 19-June-2019 11:45'
    }];
  const unreadNotifications = [
    {
      'id': 10,
      'unread': false,
      'verb': 'article_created',
      'timestamp': '2019-06-19 11:45:49',
      'description': 'barclay.koin posted an article "TESTING FOR GOT" on 19-June-2019 11:45'
    },
    {
      'id': 9,
      'unread': false,
      'verb': 'article_created',
      'timestamp': '2019-06-19 11:45:49',
      'description': 'barclay.koin posted an article "TESTING FOR GOT" on 19-June-2019 11:45'
    }
  ];
  const wrapper = mount(
    <Router history={history}>
      <SignedInLinks 
        handleLogout={mockHandleLogout}
        username={username}
        handleClick={mockHandleClick}
        notifications={notifications}
        unread={unreadNotifications.length}
        handleClear={mockHandleClear}
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
