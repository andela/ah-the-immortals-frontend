import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { Form } from 'react-bootstrap';
import PasswordResetForm from '../PasswordResetContainer';

describe('Tests PasswordResetContainer', () => {
  const store = configureStore([thunk])({
    resetpasswordlink: { message: {}, errors: {} }
  });
  const history = createBrowserHistory();
  const props = {
    showModal: jest.fn(),
  };
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <PasswordResetForm {...props} />
      </Provider>
    </Router>
  );
  it('Tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Tests input change in form', () => {
    const resetBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Find account'));
    resetBtn.simulate('click', {
      preventDefault: jest.fn()
    });
    const form = wrapper.find(Form);
    const input = form.find('FormControl[name="email"]');
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'issamwangi@gmail.com',
        name: 'email'
      }
    });
    expect(input.length).toEqual(1);
  });
  it('handles submit event', () => {
    const resetBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Find account'));
    resetBtn.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(resetBtn.length).toEqual(1);
  });
});
