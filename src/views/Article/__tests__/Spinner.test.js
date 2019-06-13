import {mount} from 'enzyme';
import React from 'react';
import Spinner from '../Spinner';



describe('pass spinner feed', () => {
  const wrapper = mount(
    <Spinner />
  );
  it('test post feed ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
