import ACTION_CONSTANTS from '../constants/constants';
import { decoded } from '../../services/api';

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = ACTION_CONSTANTS;
const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {},
  currentUser: null
};
const signInReducer = (state = initialState, action) => {
  const token = window.localStorage.getItem('token');
  const userData = decoded(token);
  const CurrentUser = userData ? userData.user_data.username : null;
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state, isAuthenticated: true, user: action.response.data.user,
      currentUser: action.response.data.user.username, errors: {}
    };
  case LOGIN_FAILURE:
    return {
      ...state, isAuthenticated: false, errors: 
      action.error.response.data.errors, user: {}
    };
  case LOGOUT:
    return { ...state, isAuthenticated: false, user: {}, currentUser: null, errors: {} };
  case 'APP_MOUNT':
    return { ...state, currentUser: CurrentUser };
  default:
    return state;
  }
};
export default signInReducer;
