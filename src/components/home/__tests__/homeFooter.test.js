/* eslint-disable */
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Footer from '../HomeFooter';

describe('Tests home footer', () => {
  it('tests footer component', () => {
    const wrapper = shallow(
      <Footer />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
