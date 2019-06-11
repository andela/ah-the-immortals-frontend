import ACTION_CONSTANTS from '../constants/constants';
import API from '../../services/api';

const { socialAuthApi } = API;
const { socialAuth, facebook, google, twitter, LOGIN_SUCCESS, LOGIN_FAILURE } = ACTION_CONSTANTS;

export const socialSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  response
});

export const socialFailure = (error) => ({
  type: LOGIN_FAILURE,
  error
});

const socialAuthAction = (data) => async (dispatch) => {
  try {
    const response = await socialAuthApi(data);
    dispatch(socialSuccess(response));
    localStorage.setItem('token', response.data.user.token);
  } catch (error) {
    dispatch(socialFailure(error));
  }
};

export const facebookAuth = () => async (dispatch) => {
  try {
    const result = await socialAuth.signInWithPopup(facebook);
    const data = {
      provider: 'facebook',
      access_token: result.credential.accessToken
    };
    dispatch(socialAuthAction(data));
  } catch (error) {
    dispatch(socialFailure(error));
  }
};

export const googleAuth = () => async (dispatch) => {
  try {
    const result = await socialAuth.signInWithPopup(google);
    const data = {
      provider: 'google-oauth2',
      access_token: result.credential.accessToken
    };
    dispatch(socialAuthAction(data));
  } catch (error) {
    dispatch(socialFailure(error));
  }
};

export const twitterAuth = () => async (dispatch) => {
  try {
    const result = await socialAuth.signInWithPopup(twitter);
    const data = {
      provider: 'twitter',
      access_token: result.credential.accessToken,
      access_token_secret: result.credential.secret
    };
    dispatch(socialAuthAction(data));
  } catch (error) {
    dispatch(socialFailure(error));
  }
};

export default socialAuthAction;
