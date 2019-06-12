import { toast } from 'react-toastify';
import ACTION_CONSTANTS from '../constants/constants';

const { SIGNUP_FAILURE, SIGNUP_SUCCESS } = ACTION_CONSTANTS;

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

const errorChecker = (errors) => {
  let result = undefined;
  if (errors.email) {
    result = errors.email[0];
  } else if (errors.username) {
    result = errors.username[0];
  } else {
    result = errors.password[0];
  }
  return result;
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGNUP_SUCCESS:
    toast.success(`Welcome ${action.response.data.user.username},
      A verification mail has been sent to you.`, {
      position: toast.POSITION.TOP_CENTER,
      toastId: 1
    });
    return {
      ...state,
      isAuthenticated: true,
      user: action.response.data.user,
      errors: {}
    };
  case SIGNUP_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      errors: action.error.response.data.errors,
      user: {}
    };
  default:
    return state;
  }
};

export { errorChecker };
export default SignupReducer;
