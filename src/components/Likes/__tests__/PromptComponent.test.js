import { mount } from 'enzyme';
import React from 'react';
import Prompt from '../PropmptComponent';

const props = {
  show: true,
  closeModal: jest.fn(),
  handlePrompt: jest.fn(),
  msg: 'Sample msg'
};
describe('Tests Prompt component', () => {
  const wrapper = mount(
    <Prompt {...props} />
  );
  it('renders prompt', () => {
    const signInLink = wrapper.find('div.login-prompt');
    expect(signInLink.exists()).toEqual(true);
  });
  it('Simulates Key up event', () => {
    const signInLink = wrapper.find('div.login-prompt');
    signInLink.simulate('keyUp');
    expect(signInLink.exists()).toEqual(true);
  });
});
