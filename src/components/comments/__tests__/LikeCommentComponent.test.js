import React from 'react';
import { mount } from 'enzyme';
import LikeDislikeComment from '../LikeCommentComponent';

const comment = {
  likesInfo: {
    like: true,
    dislike: false,
    like_count: 1,
    dislikes_count: 2
  }
};
const props = {
  handleClick: jest.fn(),
  comment: {...comment},
  isAuthenticated: 'issa'
};
describe('Tests for LikesDislikeComment Component', () => {
  const wrapper = mount(
    <LikeDislikeComment {...props} />
  );
  it('Renders LikeDislikeComment component', () => {
    const likeIcon = wrapper.find('i').first();
    expect(likeIcon.exists()).toEqual(true);
  });
  it('Simulates click of like button', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    expect(like.exists()).toEqual(true);
  });
  it('Simulates click of dislike button', () => {
    const dislike = wrapper.find('i[id="dislike"]');
    dislike.simulate('click');
    expect(dislike.exists()).toEqual(true);
  });
  it('Renders for unauthenticated user', () => {
    const newProps = Object.assign({}, props, {
      isAuthenticated: ''
    });
    const wrappedComponent = mount(
      <LikeDislikeComment {...newProps} />
    );
    const likeIcon = wrappedComponent.find('i').first();
    expect(likeIcon.exists()).toEqual(true);
  });
});
