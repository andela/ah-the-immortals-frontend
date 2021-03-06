import ACTION_CONSTANST from '../constants/constants';
import tokenDecoded from '../../services/tokenDecoder';
import { profileApi, fetchProfileApi, otherProfileApi } from '../../services/api';

const { FETCH_PROFILE_ERROR, FETCH_PROFILE, EDIT_PROFILE, EDIT_PROFILE_ERROR } = ACTION_CONSTANST;

const fetchSuccess = (data) => ({
  type: FETCH_PROFILE,
  payload: data,
});

const fetchErrors = (error) => ({
  type: FETCH_PROFILE_ERROR,
  errors: error
});

const fetchProfile = () => async (dispatch) => {
  try {
    const data = await fetchProfileApi(tokenDecoded());
    dispatch(fetchSuccess(data.data.profile));
  } catch (error) {
    dispatch(fetchErrors(error.response.data.errors));
  }
};

const editErrors = (error) => ({
  type: EDIT_PROFILE_ERROR,
  errors: error
});

const editProfile = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    await profileApi(data, tokenDecoded(), axiosHeader);
    const response = await fetchProfileApi(tokenDecoded(), axiosHeader);
    dispatch(fetchSuccess(response.data.profile));
  } catch (error) {
    dispatch(editErrors(error.response.data.errors));
  }
};

const getProfile = (otherUser) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const data = await otherProfileApi(otherUser, axiosHeader);
    dispatch(fetchSuccess(data.data.profile));
  } catch (error) {
    dispatch(fetchErrors(error.response.data.errors));
  }
};

export {
  editErrors,
  fetchErrors, fetchSuccess,
  editProfile, fetchProfile,
  getProfile
};
