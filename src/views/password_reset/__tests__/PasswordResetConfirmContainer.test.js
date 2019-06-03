import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Form } from 'react-bootstrap';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import PasswordResetConfirm from '../PasswordResetConfirmContainer';

describe('Tests PasswordResetConfirmContainer', () => {
  const store = configureStore([thunk])({
    confirmresetpassword: { message: {}, errors: {} }
  });
  const props = {
    match: {
      params: {
        token: 'tcvygbuhijn6789'
      }
    },
    showModal: jest.fn(),
    history: {push: jest.fn()}
  };
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <PasswordResetConfirm {...props} />
      </Provider>
    </Router>
  );
  it('Test mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Tests input change in form', () => {
    const form = wrapper.find(Form);
    const input = form.find('FormControl[name="password"]');
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'issamwangi@gmail.com',
        password: 'MainA9176!'
      }
    });
    expect(input.length).toEqual(1);
  });
  it('handles submit in form', () => {
    const PasswordChangeBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Submit'));
    PasswordChangeBtn.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(PasswordChangeBtn.length).toEqual(1);
  });
});
