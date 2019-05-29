import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialComponent from '../SocialComponent';

describe('<SocialComponent/>', () => {
  it('renders social component', () => {
    const mockfacebook = jest.fn();
    const mockgoogle = jest.fn();
    const mocktwitter = jest.fn();
    const wrapper = mount(
      <SocialComponent
        facebook={mockfacebook}
        google={mockgoogle}
        twitter={mocktwitter}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
