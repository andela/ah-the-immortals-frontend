import ACTION_CONSTANST from '../constants/constants';
import { profileApi, fetchProfileApi } from '../../services/api';

const { FETCH_PROFILE_ERROR, FETCH_PROFILE, EDIT_PROFILE, EDIT_PROFILE_ERROR } = ACTION_CONSTANST;

const fetchSuccess = (data) => ({
  type: FETCH_PROFILE,
  payload: data,
});

const fetchErrors = (error) => ({
  type: FETCH_PROFILE_ERROR,
  errors: error
});

const fetchProfile = (username) => async (dispatch) => {
  try {
    const data = await fetchProfileApi(username);
    dispatch(fetchSuccess(data.data.profile));
  } catch (error) {
    dispatch(fetchErrors(error.response.data.errors));
  }
};

const editErrors = (error) => ({
  type: EDIT_PROFILE_ERROR,
  errors: error
});

const editProfile = (data, username) => async (dispatch) => {
  try {
    await profileApi(data, username);
    const response = await fetchProfileApi(username);
    dispatch(fetchSuccess(response.data.profile));
  } catch (error) {
    dispatch(editErrors(error.response.data.errors));
  }
};

export {
  editErrors,
  fetchErrors, fetchSuccess,
  editProfile, fetchProfile
};
