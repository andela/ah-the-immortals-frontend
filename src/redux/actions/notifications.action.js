import { toast } from 'react-toastify';
import ACTION_CONSTANTS from '../constants/constants';
import APIS, { optInOutApi, fetchNotifStatus } from '../../services/api';

const { notificationsApi, unreadApi, deleteApi } = APIS;
const {NOTIFICATION_SUCCESS, NOTIFICATION_ERROR, UNREAD_SUCCESS,
  UNREAD_FAILURE, CLEAR_SUCCESS, CLEAR_FAILURE, OPTINOUT_SUCCESS, OPTINOUT_ERRORS } = ACTION_CONSTANTS;

export const notifySuccess = (response) => ({
  type: NOTIFICATION_SUCCESS,
  response
});

export const notifyFailure = (error) => ({
  type: NOTIFICATION_ERROR,
  error
});

export const unreadSuccess = (response) => ({
  type: UNREAD_SUCCESS,
  response
});

export const unreadFailure = (error) => ({
  type: UNREAD_FAILURE,
  error
});

export const clearSuccess = (response) => ({
  type: CLEAR_SUCCESS,
  response
});

export const clearFailure = (error) => ({
  type: CLEAR_FAILURE,
  error
});

export const fetchNotification = () => async (dispatch) => {
  try {
    const response = await notificationsApi();
    dispatch(notifySuccess(response));
  } catch (error) {
    dispatch(notifyFailure(error));
  }
};

export const fetchUnread = () => async (dispatch) => {
  try {
    const response = await unreadApi();
    dispatch(unreadSuccess(response));
  } catch (error) {
    dispatch(unreadFailure(error));
  }
};

export const clearNotify = () => async (dispatch) => {
  try {
    const response = await deleteApi();
    dispatch(clearSuccess(response));
  } catch (error) {
    dispatch(clearFailure(error));
  }
};

const optInOutSuccess = (data) => ({
  type: OPTINOUT_SUCCESS,
  payload: data
});

const optInOutError = (error) => ({
  type: OPTINOUT_ERRORS,
  payload: error
});

export const NotifStatusAction = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await fetchNotifStatus(axiosHeader);
    dispatch(optInOutSuccess(response.data));
  } catch(error) {
    dispatch(optInOutError(error));
  }
};

export const optInOutNotifAction = (data) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem('token');
    const axiosHeader = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };
    const response = await optInOutApi(data, axiosHeader);
    dispatch(optInOutSuccess(response.data));
  } catch(error) {
    dispatch(optInOutError(error));
    toast.error('Something went wrong, Try again');
  }
};
