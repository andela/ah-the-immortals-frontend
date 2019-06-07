import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from '../DummyPosts';

describe('Tests dummy post component', () => {
  const wrapper = shallow(
    <Post />
  );
  it('tests the homepage component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
