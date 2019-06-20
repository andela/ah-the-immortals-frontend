import React from 'react';
import { mount } from 'enzyme';
import LikesDislikes from '../LikesComponent';

const article = {
  slug: 'sample-slug',
  like_info: {
    like: true,
    dislike: false,
    likeCount: 1,
    dislikeCount: 2
  }
};
const props = {
  handleClick: jest.fn(),
  article: {...article},
  isAuthenticated: true
};
describe('Tests for LikesDislikes Component', () => {
  const wrapper = mount(
    <LikesDislikes {...props} />
  );
  it('Renders LikesDislikes component', () => {
    const likeIcon = wrapper.find('i').first();
    expect(likeIcon.exists()).toEqual(true);
  });
  it('Simulates click of like', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    expect(like.exists()).toEqual(true);
  });
  it('Simulates click of dislike', () => {
    const dislike = wrapper.find('i[id="dislike"]');
    dislike.simulate('click');
    expect(dislike.exists()).toEqual(true);
  });
  it('Renders for unauthenticated user', () => {
    const newProps = Object.assign({}, props, {
      isAuthenticated: false
    });
    const wrappedComponent = mount(
      <LikesDislikes {...newProps} />
    );
    const likeIcon = wrappedComponent.find('i').first();
    expect(likeIcon.exists()).toEqual(true);
  });
  it('Renders for dislikes', () => {
    const newArticle = Object.assign({},article,{
      like_info: {
        like: false,
        dislike: true,
        likeCount: 1,
        dislikeCount: 2
      }
    });
    const newProps = Object.assign({}, props, {
      isAuthenticated: true,
      article: {...newArticle}
    });
    const wrappedComponent = mount(
      <LikesDislikes {...newProps} />
    );
    const likeIcon = wrappedComponent.find('i').first();
    expect(likeIcon.exists()).toEqual(true);
  });
});
