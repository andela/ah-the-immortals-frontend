import {mount} from 'enzyme';
import React from 'react';
import PostFeed from '../PostFeed';


describe('pass post feed', () => {
  let props = [];
  const wrapper = mount(
    <PostFeed posts={props} />
  );
  it('test post feed ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
