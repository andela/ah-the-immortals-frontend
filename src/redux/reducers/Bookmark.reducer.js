import ACTION_CONSTANTS from '../constants/constants';

const { BOOKMARK_SUCCESS, BOOKMARK_FAILURE } = ACTION_CONSTANTS;
const initialState = {
  response: {
    bookmarked:false
  }
};

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
  case BOOKMARK_SUCCESS:
    return {
      ...state,
      response: {
        ...state.response,
        bookmarked:true
      }
    };
  case BOOKMARK_FAILURE:
    return {};
  default:
    return state;
  }
};

export default BookmarkReducer;

