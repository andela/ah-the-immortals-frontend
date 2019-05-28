import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../homeInfo';

const props = {
  showModal: jest.fn(),
  show: false,
  closeModal: jest.fn(),
  handleChange: jest.fn(),
  handleSubmit: jest.fn()
};

describe('Tests homepage component', () => {
  const wrapper = shallow(
    <HomePage {...props} />
  );
  it('tests the homepage component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
