import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import socialAuthAction,{ facebookAuth, twitterAuth, googleAuth } from '../SocialAuth.action';
import ACTION_CONSTANTS from '../../constants/constants';


const { socialAuth } = ACTION_CONSTANTS;

const store = configureMockStore([thunk])({});

describe('tests for socal auth actions', () => {
  const ROOT_URL = process.env.REACT_APP_BASE_URL;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('tests for facebook success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/oauth/`, {
      error: { 
      }
    });
    await store.dispatch(facebookAuth({}));
    done();
  });
  it('tests for twitter success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/oauth/`, {
      status: 200,
      response: {
        user: {
          email: 'testuser@gmail.com',
          username: 'testusername',
          token: 'someJWTToken'
        }
      }
    });
    await store.dispatch(twitterAuth({}));
    done();
  });
  it('tests for google success', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/oauth/`, {
      status: 200,
      response: {
        user: {
          email: 'testuser@gmail.com',
          username: 'testusername',
          token: 'someJWTToken'
        }
      }
    });
    await store.dispatch(googleAuth({}));
    done();
  });
  it('dispatches failure action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/oauth/`, {
      status: 400,
      response: {}
    });
    await store.dispatch(socialAuthAction({}));
    expect(store.getActions()[0].type).toEqual('LOGIN_FAILURE');
    done();
  });
});
describe('facebookAuth', () => {
  const facebook = {
    credential:{
      accessToken: 'heghfgy'
    }
  };
  jest.spyOn(socialAuth, 'signInWithPopup').mockResolvedValue(facebook);
  it('facebook auth', async () => {
    await facebookAuth();
    expect(socialAuth.signInWithPopup).not.toHaveBeenCalled();
  });
});
