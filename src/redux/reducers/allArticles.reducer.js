import ACTION_CONSTANTS from '../constants/constants';

const { FETCH_ALL, FETCH_FAIL } = ACTION_CONSTANTS;

const initialState = {
  articles: [],
  error: {}
};

const allArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ALL:
    return {
      ...state,
      articles: action.response.data.results.articles,
      error: {}
    };

  case FETCH_FAIL:
    return {
      ...state,
      error: action.error.request.response,
      articles: []
    };
  default:
    return state;
  }
};

export default allArticlesReducer;
