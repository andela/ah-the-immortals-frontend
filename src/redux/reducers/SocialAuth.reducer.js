import ACTION_CONSTANTS from '../constants/constants';

const { LOGIN_SUCCESS, LOGIN_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

const SocialReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      isAuthenticated: true,
      user: action.response.data.user,
      errors: {}
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      errors: action.error.response,
      user: {}
    };
  default:
    return state;
  }
};

export default SocialReducer;
