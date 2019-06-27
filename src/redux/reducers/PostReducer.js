import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  EDIT_POST,
  GET_PAGES,
  GET_PAGES_NEXT,
  RATE_ARTICLE

} from '../constants/types';
import ACTION_CONSTANTS from '../constants/constants';

const { LIKE_SUCCESS, LIKE_FAILURE, GET_HIGHLIGHTS_SUCCESS, GET_HIGHLIGHTS_FAILURE, CREATE_HIGHLIGHT_SUCCESS,
  REMOVE_HIGHLIGHT_SUCCESS, UPDATE_HIGHLIGH_SUCCESS } = ACTION_CONSTANTS;

const initialState = {
  posts: [],
  post: {},
  pages: [],
  pagination: {},
  editpost: [],
  loading: false,
  likeError: {}
};
const checkHighlights = (post, highlights, action) => {
  if (post.article.highlights) {
    highlights = [...post.article.highlights.data.highlights].filter((highlight) => {
      return highlight.id != action.payload.id;
    });
  }
  return highlights;
};
export default function (state = initialState, action) {
  let { post } = state;
  let highlights = [];
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
    return {
      ...state,
      post: action.payload
    };
  case LIKE_FAILURE:
    return {
      ...state,
      likeError: action.payload
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
  case RATE_ARTICLE:
    return{
      ...state,
      post:action.payload
    };
  case GET_HIGHLIGHTS_SUCCESS:
    return {
      ...state,
      post: {
        article: {
          ...post.article,
          highlights: {
            data: action.payload,
            error: {}
          }
        },
      }
    };
  case GET_HIGHLIGHTS_FAILURE:
    return {
      ...state,
      post: {
        article: {
          ...post.article,
          highlights: {
            data: {},
            error: action.payload
          }
        },
      }
    };
  case CREATE_HIGHLIGHT_SUCCESS:
    if (post.article.highlights) {
      highlights = [...post.article.highlights.data.highlights];
      highlights.push(action.payload.highlight);
    }
    return {
      ...state,
      post: {
        article: {
          ...post.article,
          highlights: {
            data: {
              highlights: highlights
            },
            error: {}
          }
        },
      }
    };
  case REMOVE_HIGHLIGHT_SUCCESS:
    highlights=checkHighlights(post,highlights,action);
    return {
      ...state,
      post: {
        article: {
          ...post.article,
          highlights: {
            data: {
              highlights:highlights
            },
            error: {}
          }
        },
      }
    };
  case UPDATE_HIGHLIGH_SUCCESS:
    if (post.article.highlights) {
      highlights=checkHighlights(post,highlights,action);
      highlights.push(action.payload.data.highlight);
    }
    return {
      ...state,
      post: {
        article: {
          ...post.article,
          highlights: {
            data: {
              highlights: highlights
            },
            error: {}
          }
        },
      }
    };
  default:
    return state;
  }
}
