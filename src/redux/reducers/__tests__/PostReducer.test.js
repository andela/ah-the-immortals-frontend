import postReducer from '../PostReducer';
import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST, EDIT_POST,GET_PAGES,GET_PAGES_NEXT

} from '../../constants/types';
import ACTION_CONSTANTS from '../../constants/constants';

const { LIKE_SUCCESS, LIKE_FAILURE } = ACTION_CONSTANTS;
const initialState = {
  posts: [],
  post: {},
  pages:[],
  pagination:{},
  editpost: [],
  loading: false,
  likeError:{}
};

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
  it('returns get pages loading', () => {
    expect(postReducer({}, {type: 'GET_PAGES', payload: []})).toEqual({
      pages: [], loading: false
    });
  });
  it('returns get pages and  pagination loading', () => {
    expect(postReducer({}, {type: GET_PAGES_NEXT, payload: []})).toEqual({
      pages: [], loading: false
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
  it('Triggers like success', () => {
    const result = postReducer({}, {
      type: LIKE_SUCCESS,
      payload: {}
    });
    expect(result).toEqual({
      post: {}
    });
  });
  it('Triggers like failure', () => {
    const result = postReducer({}, {
      type: LIKE_FAILURE,
      payload: {}
    });
    expect(result).toEqual({
      likeError: {}
    });
  });
  it('Checks for default inital state',()=>{
    const result = postReducer(undefined,{
      type:'UNEXISTING_ACTION'
    });
    expect(result).toEqual(initialState);
  });
});
