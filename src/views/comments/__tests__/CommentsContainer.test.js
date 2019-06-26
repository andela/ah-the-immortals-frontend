import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Comments from '../CommentsContainer';

describe('Tests CommentsContainer', () => {
  const store = configureStore([thunk])({
    signin: {
      currentUser: 'issa', 
    },
    comments: { 
      data: {comments: [{
        'id': 87,
        'createdAt': '2019-06-20',
        'updatedAt': '2019-06-20',
        'body': 'string',
        'author': {
          'username': 'slim',
          'bio': '',
          'image': 'hjn',
          'following': false
        },
        'parent': null,
        'likesInfo': {
          'like': false,
          'dislike': false,
          'like_count': 0,
          'dislikes_count': 0
        },
        'replies': [
          {
            'id': 87,
            'createdAt': '2019-06-20',
            'updatedAt': '2019-06-20',
            'body': 'string',
            'author': {
              'username': 'slim',
              'bio': '',
              'image': 'hjn',
              'following': false
            },
            'parent': null,
            'likesInfo': {
              'like': false,
              'dislike': false,
              'like_count': 0,
              'dislikes_count': 0
            }
          }]
      },]}, 
      error: {}}
  });
  const props = {
    data: {},
    isAuthenticated: 'issa',
    getCommentsAction: jest.fn(),
    createCommentAction: jest.fn(),
    slug: 'string'
  };
  const history = createBrowserHistory();
  const wrapper = mount (
    <Router history={history}>
      <Provider store={store}>
        <Comments {...props} />
      </Provider>
    </Router>
  );
  it('tests mounting of container', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('tests input change in form', () => {
    const form = wrapper.find('form[className="form-horizontal"]');
    const input = form.find('textarea[name="body"]');
    input.simulate('change', {
      preventDefault: jest.fn(),
      target: {
        value: 'Test body',
        name: 'body'
      }
    });
    expect(input.length).toEqual(1);
  });
  it('tests submit of a comment', () => {
    const form = wrapper.find('form[className="form-horizontal"]');
    form.simulate('submit', {
      preventDefault: jest.fn(),
    });
    expect(form.length).toEqual(1);
  });

});
