import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';
import createBrowserHistory from '../../services/history';

const history = createBrowserHistory;

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = ACTION_CONSTANTS;
const {signInApi}=APIS;

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
    dispatch(loginSuccess(response));
    localStorage.setItem('token', response.data.user.token);
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const logoutAction = () => (dispatch) =>{
  dispatch(logout());
  localStorage.clear();
  history.push('/');
};
