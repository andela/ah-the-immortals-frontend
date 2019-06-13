import postReducer from '../PostReducer';
import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST, EDIT_POST

} from '../../constants/types';



describe('article crud post tests', () => {
  it('returns original state', () => {
    expect(postReducer({}, {type: 'TYPE'})).toEqual({});
  });
  it('returns post loading', () => {
    expect(postReducer({}, {type: 'POST_LOADING'})).toEqual({
      loading: true
    });
  });
  it('returns get post loading', () => {
    expect(postReducer({}, {type: 'GET_POST'}).loading).toEqual(false);
  });
  it('returns get posts loading', () => {
    expect(postReducer({}, {type: 'GET_POSTS', payload: []})).toEqual({
      posts: [], loading: false
    });
  });
  it('returns add post', () => {
    expect(postReducer({
      posts: []
    }, {type: ADD_POST, payload: ''})).toEqual({posts: ['']});
  });
  it('returns delete post', () => {
    expect(postReducer({ posts: [{slug: 'hi-there'}]}, {type: DELETE_POST, payload: 'hi-there'})).toEqual({
      'posts': []
    });
  });
  it('returns edit post', () => {
    expect(postReducer({}, {type: EDIT_POST, payload: ''})).toEqual({
      'editpost': ''
    });
  });
});
