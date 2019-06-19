import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  EDIT_POST,
  GET_PAGES,
  GET_PAGES_NEXT 

} from '../constants/types';
import ACTION_CONSTANTS from '../constants/constants';

const {LIKE_SUCCESS,LIKE_FAILURE} =ACTION_CONSTANTS;

const initialState = {
  posts: [],
  post: {},
  pages:[],
  pagination:{},
  editpost: [],
  loading: false,
  likeError:{}
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
  case LIKE_SUCCESS:
    return{
      ...state,
      post:action.payload
    };
  case LIKE_FAILURE:
    return{
      ...state,
      likeError:action.payload 
    };
  case GET_PAGES:
    return {
      ...state,
      pages: action.payload,
      loading: false
    };
  case GET_PAGES_NEXT:
    return {
      ...state,
      pages: action.payload,
      loading: false
    };
  default:
    return state;
  }
}
