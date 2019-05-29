import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { LOGIN_SUCCESS, LOGIN_FAILURE } = ACTION_CONSTANTS;
const {signInApi}=APIS;

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  response
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

const signInAction = (data) => async (dispatch) => {
  try {
    const response = await signInApi(data);
    dispatch(loginSuccess(response));
    localStorage.setItem('token', response.data.user.token);
    localStorage.setItem('username', response.data.user.username);
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export default signInAction;
