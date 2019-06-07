import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupModal from '../SignupComponent';

describe('Tests signup component', () => {
  const props = {
    show: false,
    closeModal: jest.fn(),
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    facebook: jest.fn(),
    google: jest.fn(),
    twitter: jest.fn()
  };

  it('Tests signup modal', () => {
    const wrapper = shallow(<SignupModal {...props} />);
  });
});
