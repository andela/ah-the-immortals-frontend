import {toast} from 'react-toastify';
import ACTION_CONSTANTS from '../constants/constants';

const { LOGIN_SUCCESS, LOGIN_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  user: {},
  errors: {}
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      user: action.response.data.user,
      errors: {}
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      errors: action.error.response.data.errors,
      user: {}
    };
  default:
    return state;
  }
};

export default signInReducer;
