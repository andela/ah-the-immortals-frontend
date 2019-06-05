import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import { CloseButton } from 'react-bootstrap';
import Form from '../../../components/signup/FormComponent';
import SignupModal from '../../../components/signup/SignupComponent';
import Home from '../HomeContainer';

describe('Tests Home container', () => {
  const store = configureStore([thunk])({
    signup: { user: {}, errors: {} }
  });
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
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
});
