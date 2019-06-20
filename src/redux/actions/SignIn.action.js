import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = ACTION_CONSTANTS;
const { signInApi } = APIS;

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  response
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

export const logout = () => ({
  type: LOGOUT
});

export const signInAction = (data) => async (dispatch) => {
  try {
    const response = await signInApi(data);
    window.localStorage.setItem('token', response.data.user.token);
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const logoutAction = () => (dispatch) => {
  localStorage.clear();
  dispatch(logout());
};
