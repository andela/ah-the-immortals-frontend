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
    toast.error(action.error.response.data.errors.credentials[0],{
      toastId:1,
      position:toast.POSITION.TOP_CENTER
    });
    return {
      ...state,
      errors: action.error.response,
      user: {}
    };
  default:
    return state;
  }
};

export default signInReducer;
