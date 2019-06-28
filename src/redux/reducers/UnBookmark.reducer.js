import ACTION_CONSTANTS from '../constants/constants';

const { UNBOOKMARK_SUCCESS} = ACTION_CONSTANTS;
const initialState = {
  response: {
    bookmarked:true
  }
};

const UnBookmarkReducer = (state = initialState, action) => {
  if (action.type === UNBOOKMARK_SUCCESS) {
    return {
      ...state,
      response: {
        ...state.response,
        bookmarked:false,
        message:action.response.message
      }
    };
  } else {
    return state;
  }
};

export default UnBookmarkReducer;

