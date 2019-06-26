import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import LikeComment from '../LikeCommentContainer';

describe('Tests LikeCommentContainer', () => {
  const store = configureStore([thunk])({
    signin: {
      currentUser: 'issa', 
    },
  });
  const props = {
    comment: {
      'id': 87,
      'createdAt': '2018-06-25',
      'updatedAt': '2018-06-25',
      'body': 'string-tests',
      'author': {
        'username': 'issa',
        'bio': '',
        'image': 'wqout',
        'following': false
      },
      'parent': null,
      'likesInfo': {
        'like': false,
        'dislike': false,
        'like_count': 0,
        'dislikes_count': 0
      }},
    isAuthenticated: 'issa',
    likeCommentAction: jest.fn(),
    slug: 'string'
  };
  const history = createBrowserHistory();
  const wrapper = mount (
    <Router history={history}>
      <Provider store={store}>
        <LikeComment {...props} />
      </Provider>
    </Router>
  );
  it('tests mounting of container', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('tests clicking of the like button', () => {
    const like = wrapper.find('i[id="like"]');
    like.simulate('click');
    expect(like.exists()).toEqual(true);
    expect(like.length).toEqual(1);
  });
});
