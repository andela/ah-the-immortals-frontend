import ACTION_CONSTANTS from '../constants/constants';
import API from '../../services/api';

const { SIGNUP_FAILURE, SIGNUP_SUCCESS } = ACTION_CONSTANTS;
const { signUpApi } = API;

const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  error
});

const signUpSuccess = (response) => ({
  type: SIGNUP_SUCCESS,
  response
});

const signUpAction = (data) => async (dispatch) => {
  try {
    const response = await signUpApi(data);
    dispatch(signUpSuccess(response));
  } catch (error) {
    dispatch(signUpFailure(error));
  }
};
export {
  signUpSuccess,
  signUpFailure
};

export default signUpAction;
