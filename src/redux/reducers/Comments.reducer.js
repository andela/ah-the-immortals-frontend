import ACTION_CONSTANTS from '../constants/constants';

const { CREATE_COMMENT_FAILURE, CREATE_REPLY, CREATE_COMMENT, READ_COMMENTS, READ_COMMENTS_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  data: {
    comments: []
  },
  error: {},
  isLoading: true,
};

/*
 *Defines fetch comment reducer and returns the
 *state based on the action types
 */

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
  case READ_COMMENTS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      error: {}
    };
  case READ_COMMENTS_FAILURE:
    return {
      ...state,
      data: {},
      isLoading: false,
      error: action.payload
    };
  case CREATE_COMMENT:
    state.data.comments.unshift({ ...action.payload.comment, replies: []});
    return {
      ...state,
      data: {
        comments: [ ...state.data.comments ]
      },
      error: {},
      isLoading: false
    };
  
  case CREATE_COMMENT_FAILURE:
    return {
      ...state,
      data: {},
      isLoading: false,
      error: action.payload
    };
  case CREATE_REPLY:
    return{
      ...state,
      data: {
        comments: [ ...state.data.comments ]
      },
      error: {},
      isLoading: false
    };
  default:
    return state;
  }
};

export default CommentsReducer;
