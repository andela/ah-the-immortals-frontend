import ACTION_CONSTANTS from '../constants/constants';

const { FOLLOWING_SUCCESS, FOLLOWING_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  data: [],
  error: {},
  userCount: 0
};

const followingReducer = (state = initialState, action) => {
  switch (action.type) {
  case FOLLOWING_SUCCESS:
    return {
      ...state,
      data: action.response.data.profile.following,
      userCount: action.response.data.profile.count,
      error: {}
    };
  
  case FOLLOWING_FAILURE:
    return {
      ...state,
      error: action.error.request.response,
      data: {}
    };
  default:
    return state;
  }
};

export default followingReducer;
