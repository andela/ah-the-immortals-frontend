import React from 'react';
import { Router, Link, NavLink, BrowserRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NavigationBar from '../NavigationBarContainer';
import NotificationModal from '../../../components/notifications/NotificationComponent';

describe('Tests Logout Function', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({
    signin: {
      isAuthenticated: true,
      user: { username: 'eric' }
    },
    signup: {
      user: {},
      errors: {}
    },
    search: {},
    prompt:{show:true},
    notify: {
      notifications: [
        {
          'id': 13,
          'unread': false,
          'verb': 'article_created',
          'timestamp': '2019-06-19 11:45:49',
          'description': 'barclay.koin posted an article "TESTING FOR GOT" on 19-June-2019 11:45'
        }
      ],
      unreadNotifications: [
        {
          'id': 13,
          'unread': true,
          'verb': 'article_created',
          'timestamp': '2019-06-19 11:45:49',
          'description': 'barclay.koin posted an article "TESTING FOR GOT" on 19-June-2019 11:45'
        }
      ]
    },
    notification: {
      in_app_notifications: '',
      email_notifications: ''
    }
  },
  );

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

  it('handle notification modal', () => {
    const settings = wrapper.findWhere(n => n.type() === 'button' && n.contains('Settings'));
    settings.simulate('click', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find(NotificationModal).prop('show')).toEqual(true);
  });

  it('handles input change in email toggle', () => {
    const settings = wrapper.findWhere(n => n.type() === 'button' && n.contains('Settings'));

    settings.simulate('click', {
      preventDefault: jest.fn()
    });
    const props = {
      onToggle: jest.fn(),
      notification: {
        in_app_notifications: '',
        email_notifications: ''
      },
      show: true,
      closeModal: jest.fn()
    };
    const event = {
      onToggle() {},
      preventDefault() {},
      target: { 
        value: true,
        name: 'email_notifications'
      }
    };
    const email_toggle = wrapper.find('input[name="email_notifications"]');
    email_toggle.simulate('change', event);
    expect(email_toggle.length).toEqual(1);
  });

  it('handles input change in push toggle', () => {
    const settings = wrapper.findWhere(n => n.type() === 'button' && n.contains('Settings'));

    settings.simulate('click', {
      preventDefault: jest.fn()
    });
    const props = {
      onToggle: jest.fn(),
      notification: {
        in_app_notifications: '',
        email_notifications: ''
      },
      show: true,
      closeModal: jest.fn()
    };
    const event = {
      onToggle() {},
      preventDefault() {},
      target: { 
        value: true,
        name: 'in_app_notifications'
      }
    };
    const email_toggle = wrapper.find('input[name="in_app_notifications"]');
    email_toggle.simulate('change', event);
    expect(email_toggle.length).toEqual(1);
  });

  it('handles input change in email toggle true', () => {
    const settings = wrapper.findWhere(n => n.type() === 'button' && n.contains('Settings'));

    settings.simulate('click', {
      preventDefault: jest.fn()
    });
    const props = {
      onToggle: jest.fn(),
      notification: {notification:{
        in_app_notifications: true,
        email_notifications: true
      }},
      show: true,
      closeModal: jest.fn()
    };
    const component = mount(<NotificationModal {...props} />);
    const event = {
      onToggle() {},
      preventDefault() {},
      target: { 
        value: false,
        name: 'email_notifications'
      }
    };
    
    const email_toggle = component.find('input[name="email_notifications"]');    
    email_toggle.simulate('change', event);
    expect(email_toggle.length).toEqual(1);
  });
  it('handles input change in email toggle true', () => {
    const settings = wrapper.findWhere(n => n.type() === 'button' && n.contains('Settings'));

    settings.simulate('click', {
      preventDefault: jest.fn()
    });
    const props = {
      onToggle: jest.fn(),
      notification: {notification:{
        in_app_notifications: true,
        email_notifications: true
      }},
      show: true,
      closeModal: jest.fn()
    };
    const component = mount(<NotificationModal {...props} />);
    const event = {
      onToggle() {},
      preventDefault() {},
      target: { 
        value: false,
        name: 'in_app_notifications'
      }
    };
    
    const email_toggle = component.find('input[name="in_app_notifications"]');    
    email_toggle.simulate('change', event);
    expect(email_toggle.length).toEqual(1);
  });
});
