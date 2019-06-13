import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchProfile, editProfile } from '../profile.actions';
import tokenDecoded from '../../../services/tokenDecoder';

describe('Test profile actions', () => {

  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  const username = tokenDecoded();

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const profile = {
    'username': 'john',
    'first_name': 'john',
    'last_name': 'doe',
    'bio': 'Once Leonidas realizes he will be surrounded, he sends away the Greek allies to alert the cities to the south.',
    'img_url': 'http://res.cloudinary.com/grean/image/upload/c_fill,h_120,w_80/Screenshot_2019-05-29_at_00.00.16_zr1sbn',
    'created_at': '2019-05-29 12:03:50',
    'updated_at': '2019-06-05 00:36:59',
    'following': false
  };

  it('test successful fetch profile actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(fetchProfile());
    expect(store.getActions()[0].type).toEqual('FETCH_PROFILE');
    done();
  });

  it('test fetch profile actions with errors', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(fetchProfile());
    expect(store.getActions()[0].type).toEqual('FETCH_PROFILE_ERROR');
    done();
  });

  it('test successful edit profile actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/`, {
        status: 200,
        response: {
          profile
        }
      });
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(editProfile());
    expect(store.getActions()[0].type).toEqual('FETCH_PROFILE');
    done();
  });

  it('test edit profile actions with errors', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(editProfile());
    expect(store.getActions()[0].type).toEqual('EDIT_PROFILE_ERROR');
    done();
  });
});
