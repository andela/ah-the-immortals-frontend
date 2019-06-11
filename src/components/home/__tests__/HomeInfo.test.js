import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../HomeInfo';

const props = {
  showModal: jest.fn(),
  show: false,
  closeModal: jest.fn(),
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  handleSignInShow: jest.fn(),
  signInShow: false,
  handleSignInSubmit: jest.fn(),
  facebook: jest.fn(),
  google: jest.fn(),
  twitter: jest.fn(),
  handleSignInLink:jest.fn(),
  signupdata:{},
  errorShow:{},
  handleSignUpLink: jest.fn(),
  signindata: {},
  signInError: false
};

describe('Tests homepage component', () => {
  const wrapper = shallow(
    <HomePage {...props} />
  );
  it('tests the homepage component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
