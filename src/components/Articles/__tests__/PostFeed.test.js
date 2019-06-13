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
  it('test map function', () => {
    wrapper.find('PostFeed').find('PostItem').map(node => node.text());
    expect(wrapper).not.toBe(null);
  });
});
