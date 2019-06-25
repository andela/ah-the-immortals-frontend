import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {clearNotify, fetchUnread, fetchNotification, unreadSuccess, clearSuccess} from '../notifications.action';
import {fetchProfile, getProfile} from '../profile.actions';

describe('Test Notifications actions', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const ROOT_URL = process.env.REACT_APP_BASE_URL;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const notifications = [
    {
      'id': 79,
      'unread': false,
      'verb': 'article_created',
      'timestamp': '2019-06-20 12:58:36',
      'description': 'slim posted an article \'THREE D\' on 20-June-2019 12:58'
    }];
  const message = 'Notifications deleted successfully';

  it('test successful fetch notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/`, {
        status: 200,
        response: {
          notifications
        }
      });

    await store.dispatch(fetchNotification());
    expect(store.getActions()[0].type).toEqual('NOTIFICATION_SUCCESS');
    done();
  });

  it('test successful fetch unread notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/unread/`, {
        status: 200,
        response: {
          notifications
        }
      });

    await store.dispatch(fetchUnread());
    expect(store.getActions()[0].type).toEqual('UNREAD_SUCCESS');
    done();
  });

  it('test successful delete all notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/`, {
        status: 200,
        response: {
          message
        }
      });

    await store.dispatch(clearNotify());
    expect(store.getActions()[0].type).toEqual('CLEAR_SUCCESS');
    done();
  });

  it('test unsuccessful fetch notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/`, {
        status: 404,
        response: {
          'message': 'You have no new notifications'
        }
      });

    await store.dispatch(fetchNotification());
    expect(store.getActions()[0].type).toEqual('NOTIFICATION_ERROR');
    done();
  });

  it('test unsuccessful fetch unread notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/unread/`, {
        status: 404,
        response: {
          'message': 'You have no new notifications'
        }
      });

    await store.dispatch(fetchUnread());
    expect(store.getActions()[0].type).toEqual('UNREAD_FAILURE');
    done();
  });

  it('test unsuccessful delete all notifications action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/`, {
        status: 404,
        response: {
          'message': 'No notifications found'
        }
      });

    await store.dispatch(clearNotify());
    expect(store.getActions()[0].type).toEqual('CLEAR_FAILURE');
    done();
  });
});
