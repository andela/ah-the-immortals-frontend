import ACTION_CONSTANTS from '../constants/constants';

const { FOLLOWERS_SUCCESS, FOLLOWERS_FAILURE,} = ACTION_CONSTANTS;

const initialState = {
  users: [],
  errors: {},
  count: 0
};

const followReducer = (state = initialState, action) => {
  switch (action.type) {
  case FOLLOWERS_SUCCESS:
    return {
      ...state,
      users: action.response.data.profile.followers,
      count: action.response.data.profile.count,
      errors: {}
    };
  case FOLLOWERS_FAILURE:
    return {
      ...state,
      errors: action.error.request.response,
      users: {}
    };
  default:
    return state;
  }
};

export default followReducer;
