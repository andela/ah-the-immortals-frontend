import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { notificationsApi, unreadApi, deleteApi } = APIS;
const {NOTIFICATION_SUCCESS, NOTIFICATION_ERROR, UNREAD_SUCCESS,
  UNREAD_FAILURE, CLEAR_SUCCESS, CLEAR_FAILURE } = ACTION_CONSTANTS;

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
