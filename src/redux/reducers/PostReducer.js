import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  EDIT_POST

} from '../constants/types';

const initialState = {
  posts: [],
  post: {},
  editpost: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case POST_LOADING:
    return {
      ...state,
      loading: true
    };
  case GET_POST:
    return {
      ...state,
      post: action.payload,
      loading: false
    };
  case EDIT_POST:
    return {
      ...state,
      editpost: action.payload
    };
  case ADD_POST:
    return {
      ...state,
      posts: [
        action.payload, 
        ...state.posts
      ]
    };
  case DELETE_POST:
    return {
      ...state,
      posts: state.posts.filter(post => post.slug !== action.payload)
    };
  case GET_POSTS:
    return {
      ...state,
      posts: action.payload,
      loading: false
    };
  default:
    return state;
  }
}
