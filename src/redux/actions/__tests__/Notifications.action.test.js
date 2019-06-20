import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { NotifStatusAction, optInOutNotifAction } from '../notifications.action';

describe('Test notifications actions', () => {

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

  const notification = {
    in_app_notifications: true,
    email_notifications: true
  };

  it('test successful fetch notifications actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/subscription/`, {
        status: 200,
        response: {
          notification
        }
      });

    await store.dispatch(NotifStatusAction());
    expect(store.getActions()[0].type).toEqual('OPTINOUT_SUCCESS');
    done();
  });

  it('test fetch notifications actions with errors', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/subscription/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(NotifStatusAction());
    expect(store.getActions()[0].type).toEqual('OPTINOUT_ERRORS');
    done();
  });

  it('test successful post notifications actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/subscription/`, {
        status: 200,
        response: {
          notification
        }
      });

    await store.dispatch(optInOutNotifAction());
    expect(store.getActions()[0].type).toEqual('OPTINOUT_SUCCESS');
    done();
  });

  it('test post notifications actions with errors', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/notifications/subscription/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(optInOutNotifAction());
    expect(store.getActions()[0].type).toEqual('OPTINOUT_ERRORS');
    done();
  });
});
