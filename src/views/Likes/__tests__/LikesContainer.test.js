import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { CloseButton } from 'react-bootstrap';
import Likes from '../LikesContainer';

const store = configureStore([thunk])({
  post: {
    likeError: {
      likeError: {

      }
    }
  },
  signin: {
    currentUser: 'testUser'
  }
});
const props = {
  article: {
    slug: 'Test-slug',
    like_info: {
      like: true,
      dislike: false,
      likeCount: 1,
      dislikeCount: 0
    }
  }
};
const removeDislikeProps = {
  article: {
    slug: 'Test-slug',
    like_info: {
      like: false,
      dislike: true,
      likeCount: 1,
      dislikeCount: 0
    }
  }
};
describe('Tests Likes Container for authenticated user', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Likes {...props} />
    </Provider>
  );
  it('Tests for liking of an article', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    expect(like.exists()).toEqual(true);
  });
  it('Tests for disliking of article', () => {
    const dislike = wrapper.find('i[id="dislike"]');
    dislike.simulate('click');
    expect(dislike.exists()).toEqual(true);
  });
});

describe('Tests likes container for unathentocated use', () => {
  const unauthenticatedStore = configureStore([thunk])({
    post: { likeError: {} },
    signin: {
      currentUser: undefined
    }
  });
  const wrapper = mount(
    <Provider store={unauthenticatedStore}>
      <Likes {...props} />
    </Provider>
  );
  it('Tests like when unauthenticatd', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    expect(like.exists()).toEqual(true);
  });
  it('Tests for sign in prompt', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    const signIn = wrapper.find('div.login-prompt');
    signIn.simulate('click');
    expect(signIn.exists()).toEqual(true);
  });
  it('Simulates show of dislike prompt', () => {
    const dislike = wrapper.find('i[id="dislike"]');
    dislike.simulate('click');
    const signIn = wrapper.find('div.login-prompt');
    signIn.simulate('click');
    expect(signIn.exists()).toEqual(true);
  });
  it('Simulates closing of modal', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    const signIn = wrapper.find('div.login-prompt');
    signIn.simulate('click');
    const closeModalBtn = wrapper.find(CloseButton);
    closeModalBtn.simulate('click');
    expect(closeModalBtn.exists()).toEqual(true);
  });
});
describe('Removes dislike', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Likes {...removeDislikeProps} />
    </Provider>
  );
  it('Removes dislike', () => {
    const dislike = wrapper.find('i[id="dislike"]');
    dislike.simulate('click');
    expect(dislike.exists()).toEqual(true);
  });
});
