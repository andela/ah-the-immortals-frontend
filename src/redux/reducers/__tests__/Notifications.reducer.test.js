
import {NotificatonsReducer, notifyReducer} from '../notifications.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Test Notifications reducer', () => {
  it('test successful fetch notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.NOTIFICATION_SUCCESS,
      response: {
        data: {
          notifications: [
            {
              'id': 83,
              'unread': false,
              'verb': 'article_created',
              'timestamp': '2019-06-20 15:43:01',
              'description': 'slim posted an article \'NEW ONE\' on 20-June-2019 15:43'
            }
          ]
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      notifications: action.response.data.notifications,
      unreadNotifications: [],
      error: {}
    });
  });

  it('test unsuccessful fetch notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.NOTIFICATION_ERROR,
      error: {
        request: {
          response: {
            'message': 'You have no new notifications'
          }
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      error: action.error.request.response,
      notifications: {}
    });
  });

  it('test successful fetch unread notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.UNREAD_SUCCESS,
      response: {
        data: {
          notifications: [
            {
              'id': 83,
              'unread': false,
              'verb': 'article_created',
              'timestamp': '2019-06-20 15:43:01',
              'description': 'slim posted an article \'NEW ONE\' on 20-June-2019 15:43'
            }
          ]
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      unreadNotifications: action.response.data.notifications,
      error: {}
    });
  });

  it('test unsuccessful fetch unread notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.UNREAD_FAILURE,
      error: {
        request: {
          response: {
            'message': 'You have no new notifications'
          }
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      error: action.error.request.response,
      unreadNotifications: {}
    });
  });

  it('test successful clear all notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.CLEAR_SUCCESS,
      response: {
        data: {
          'message': 'Notifications deleted successfully'
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      message: action.response.data.message,
      notifications: [],
      error: {}
    });
  });

  it('test unsuccessful clear all notifications', () => {
    const action = {
      type: ACTION_CONSTANTS.CLEAR_FAILURE,
      error: {
        request: {
          response: {
            'message': 'No notifications found'
          }
        }
      }
    };
    expect(notifyReducer({}, action)).toEqual({
      error: action.error.request.response,
      message: {}
    });
  });

  it('test initial state', () => {
    const action = {
      notifications: [],
      unreadNotifications: [],
      message: {},
      error: {}
    };
    expect(notifyReducer({}, action)).toEqual({});
  });
});

describe('Notification reducer', () => {
  it('notification details are sent successfully', () => {
    const action = {
      type: ACTION_CONSTANTS.OPTINOUT_SUCCESS,
      response: {
        notification: {
          in_app_notifications: true,
          email_notifications: true
        }
      }
    };
    expect(NotificatonsReducer({}, action)).toEqual({
      notification: action.payload,
      error: {}
    });
  });
  it('test successful fetch notification', () => {
    const payload = {
      'notification': {
        'in_app_notifications': true,
        'email_notifications': true
      }
    };
    expect(NotificatonsReducer({}, { type: ACTION_CONSTANTS.OPTINOUT_SUCCESS }).payload).toEqual();
  });

  it('test edit profile with errors', () => {
    const action = {
      type: ACTION_CONSTANTS.OPTINOUT_ERRORS,
      error: 'Cannot senf notififications subscription'
    };
    expect(NotificatonsReducer({}, action)).toEqual({
      error: action.error,
      notification: {}
    });
  });

  it('test fetch profile with errors', () => {
    const action = {
      type: ACTION_CONSTANTS.OPTINOUT_ERRORS,
      error: 'Notififications cannot be found'
    };
    expect(NotificatonsReducer({}, action)).toEqual({
      error: action.error,
      notification: {}
    });
  });

  it('test initial state', () => {
    const action = {
      type: 'default state',
      notification: {},
      error: {}
    };
    expect(NotificatonsReducer({}, action)).toEqual({});
  });
});
