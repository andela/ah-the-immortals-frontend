import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';
import tokenDecoded from '../../services/tokenDecoder';

const { followersApi, followingApi, followApi, unfollowApi } = APIS;
const { FOLLOWERS_SUCCESS,
  FOLLOWERS_FAILURE,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE } = ACTION_CONSTANTS;

export const followerSuccess = (response) => ({
  type: FOLLOWERS_SUCCESS,
  response
});

export const followerFailure = (error) => ({
  type: FOLLOWERS_FAILURE,
  error
});

export const followingSuccess = (response) => ({
  type: FOLLOWING_SUCCESS,
  response
});

export const followingFailure = (error) => ({
  type: FOLLOWING_FAILURE,
  error
});

export const followSuccess = (response) => ({
  type: FOLLOW_SUCCESS,
  response
});

export const followFailure = (error) => ({
  type: FOLLOW_FAILURE,
  error
});

export const unfollowSuccess = (response) => ({
  type: UNFOLLOW_SUCCESS,
  response
});

export const unfollowFailure = (error) => ({
  type: UNFOLLOW_FAILURE,
  error
});

export const userFollowersAction = (profile) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await followersApi(profile, axiosHeader);
    dispatch(followerSuccess(response));
  } catch (error) {
    dispatch(followerFailure(error));
  }
};

export const userFollowingAction = (profile) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await followingApi(profile, axiosHeader);
    dispatch(followingSuccess(response));
  } catch (error) {
    dispatch(followingFailure(error));
  }
};

export const followAction = (otherUser) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await followApi(otherUser, axiosHeader);
    dispatch(followSuccess(response));
  } catch (error) {
    dispatch(followFailure(error));
  }
};

export const unfollowAction = (otherUser) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await unfollowApi(otherUser, axiosHeader);
    dispatch(unfollowSuccess(response));
  } catch (error) {
    dispatch(unfollowFailure(error));
  }
};
