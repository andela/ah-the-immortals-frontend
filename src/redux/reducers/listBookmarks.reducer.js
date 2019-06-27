import ACTION_CONSTANTS from '../constants/constants';

const { LIST_BOOKMARKS, LIST_BOOKMARKS_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  bookmarks: [],
  errors: {}
};

const Bookmarks = (state = initialState, action) => {
  switch (action.type) {
  case LIST_BOOKMARKS:
    return {
      ...state,
      bookmarks: action.payload,
      errors: {}
    };
  case LIST_BOOKMARKS_FAILURE:
    return {
      ...state,
      bookmarks: {},
      errors: action.payload
    };
  default:
    return state;
  }
};

export default Bookmarks;
