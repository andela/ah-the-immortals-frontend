import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavigationBar from '../homeNavbar';

describe('Tests navigation Bar', () => {
  it('Tests navigation Bar component', () => {
    const wrapper = shallow(
      <NavigationBar showModal={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
