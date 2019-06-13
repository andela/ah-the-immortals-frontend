import {mount} from 'enzyme';
import React from 'react';
import Articles from '../Articles';


describe('pass articles', () => {
  const wrapper = mount(
    <Articles />
  );
  it('test 1', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
