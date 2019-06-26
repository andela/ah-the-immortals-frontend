import ACTION_CONSTANTS from '../constants/constants';

const { NOTIFICATION_SUCCESS, NOTIFICATION_ERROR, UNREAD_SUCCESS,
  UNREAD_FAILURE, CLEAR_SUCCESS, CLEAR_FAILURE, OPTINOUT_SUCCESS, OPTINOUT_ERRORS } = ACTION_CONSTANTS;

const initialState = {
  notifications: [],
  unreadNotifications: [],
  message: {},
  error: {}
};

export const notifyReducer = (state = initialState, action) => {
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

const initialStateOpt = {
  notification: {},
  error: {}
};

export const NotificatonsReducer = (state = initialStateOpt, action) => {
  switch (action.type) {
  case OPTINOUT_SUCCESS:  
    return {
      ...state,
      notification: action.payload,
      error: {}
    };

  case OPTINOUT_ERRORS:
    return {
      ...state,
      error: action.error,
      notification: {}
    };
    
  default:
    return state;
  }
};
