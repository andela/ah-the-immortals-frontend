import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import signUpAction from '../SignUp.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests signup actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const ROOT_URL = process.env.REACT_APP_BASE_URL;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatches a success action', async (done) => {
    const user = {
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTcsImV4cCI6MTU1ODM1MjA0NX0.3aMD-c07QNRt0rtK7FrGjMv3duu-Mw4Lr__gbToG14s',
      'message': 'A verification email has been sent to test4@gmail.com',
      'data': {
        'email': 'test4@gmail.com',
        'username': 'test4'
      }
    };
    moxios.stubRequest(`${ROOT_URL}/users/`, {
      status: 200,
      response: {
        user
      }
    });
    await store.dispatch(signUpAction({}));
    expect(store.getActions()[0].type).toEqual('SIGNUP_SUCCESS');
    done();
  });

  it('dispatches failure action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/`, {
      status: 400,
      response: {}
    });
    await store.dispatch(signUpAction({}));
    expect(store.getActions()[0].type).toEqual('SIGNUP_FAILURE');
    done();
  });

  it('shows toast for unmatching password', () => {
    store.dispatch(signUpAction({
      email: 'test@gmail.com',
      username: 'testusername',
      password: 'password',
      password_confirm: 'password confirm'
    }));
    expect(store.getActions()).toEqual([]);
  });
});
