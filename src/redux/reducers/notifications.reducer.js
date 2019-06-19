import ACTION_CONSTANTS from '../constants/constants';

const { NOTIFICATION_SUCCESS, NOTIFICATION_ERROR, UNREAD_SUCCESS,
  UNREAD_FAILURE, CLEAR_SUCCESS, CLEAR_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  notifications: [],
  unreadNotifications: [],
  message: {},
  error: {}
};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
  case NOTIFICATION_SUCCESS:
    return {...state, notifications: action.response.data.notifications, unreadNotifications: [], error: {}};
  case NOTIFICATION_ERROR:
    return {...state, error: action.error.request.response, notifications: {}};
  case UNREAD_SUCCESS:
    return {...state, unreadNotifications: action.response.data.notifications, error: {}};
  case UNREAD_FAILURE:
    return {...state, error: action.error.request.response, unreadNotifications: {}};
  case CLEAR_SUCCESS:
    return {...state, message: action.response.data.message, notifications: [], error: {}};
  case CLEAR_FAILURE:
    return {...state, error: action.error.request.response, message: {}};
  default:
    return state;
  }
};

export default notifyReducer;
