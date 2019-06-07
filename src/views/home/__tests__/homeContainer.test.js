import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { CloseButton } from 'react-bootstrap';
import Form from '../../../components/signup/FormComponent';
import SignupModal from '../../../components/signup/SignupComponent';
import Home from '../HomeContainer';
import LogInModal from '../../../components/Login/LogInModal';
import LogInForm from '../../../components/Login/LogInForm';

describe('Tests Home container', () => {
  const store = configureStore([thunk])({
    signup: { user: {}, errors: {} }
  });
  const history = createBrowserHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );

  it('Tests mounting of component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens modal when button is clicked', () => {
    const signupBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Join now'));

    signupBtn.simulate('click', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find(SignupModal).prop('show')).toEqual(true);
  });

  it('handles input change in form', () => {
    const signupBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Join now'));

    signupBtn.simulate('click', {
      preventDefault: jest.fn()
    });
    const form = wrapper.find(Form);
    const input = form.find('input[name="username"]');
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'brian',
        name: 'username'
      }
    });
    expect(input.length).toEqual(1);
  });

  it('handles submit event', () => {
    const signupBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Join now'));

    signupBtn.simulate('click', {
      preventDefault: jest.fn()
    });

    
    const form = wrapper.find(Form);
    const submitBtn = form.find('input[type="submit"]');

    submitBtn.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(submitBtn.length).toEqual(1);
  });

  it('handles close modal', () => {
    const signupBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Join now'));

    signupBtn.simulate('click', {
      preventDefault: jest.fn()
    });

    const modal = wrapper.find(SignupModal);
    const closeBtn = modal.find(CloseButton);

    closeBtn.simulate('click');
    expect(closeBtn.length).toEqual(1);
  });

  it('opens sign in modal when button is clicked', () => {
    const signInBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Sign In'));

    signInBtn.simulate('click', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find(LogInModal).prop('signInShow')).toEqual(true);
  });

  it('handles sign in submit', () => {
    const signInBtn = wrapper.findWhere(n => n.type() === 'button' && n.contains('Sign In'));

    signInBtn.simulate('click', {
      preventDefault: jest.fn()
    });

    const loginForm = wrapper.find(LogInForm);
    const submitBtn = loginForm.find('button[type="submit"]');

    submitBtn.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(submitBtn.length).toEqual(1);
  });
});
