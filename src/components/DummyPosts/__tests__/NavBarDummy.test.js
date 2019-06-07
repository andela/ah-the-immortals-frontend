import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../NavBarDummy';

describe('Tests dummy navigation Bar', () => {
  it('Tests dummy navigation Bar component', () => {
    const wrapper = shallow(
      <Navbar />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
