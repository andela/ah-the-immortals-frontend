import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { signInAction, logoutAction } from '../SignIn.action';

const store = configureMockStore ([thunk])({});

describe('test sign in actions', () => {
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('test sign in success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/login/`, {
      status: 200,
      response: {
        user: {
          email: 'testuser@gmail.com',
          username: 'testusername',
          token: 'someJWTToken'
        }
      }
    });
    await store.dispatch(signInAction({}));
    expect(store.getActions()[0].type).toEqual('LOGIN_SUCCESS');
    done();
  });
  it('test sign in failure', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/login/`, {
      status: 400,
      response: {}
    });
    await store.dispatch(signInAction({}));
    expect(store.getActions()[0].type).toEqual('LOGIN_FAILURE');
    done();
  });
  it('test sign out success', async (done) => {
    await store.dispatch(logoutAction({}));
    expect(store.getActions()[0].type).toEqual('LOGOUT');
    done();
  });
});
