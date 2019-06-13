import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { userFollowersAction, userFollowingAction, followAction, unfollowAction } from '../userFollow.action';
import tokenDecoded from '../../../services/tokenDecoder';

describe('Test userfollow actions', () => {

  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  const username = tokenDecoded();
  const otherUser = 'john';

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
    'following': false
  };

  it('test successful fetch followers actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/followers/`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(userFollowersAction());
    expect(store.getActions()[0].type).toEqual('FOLLOWERS_SUCCESS');
    done();
  });

  it('test unsuccessful fetch followers actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/followers/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(userFollowersAction());
    expect(store.getActions()[0].type).toEqual('FOLLOWERS_FAILURE');
    done();
  });

  it('test successful fetch following actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/follow/`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(userFollowingAction());
    expect(store.getActions()[0].type).toEqual('FOLLOWING_SUCCESS');
    done();
  });

  it('test unsuccessful fetch following actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/follow/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(userFollowingAction());
    expect(store.getActions()[0].type).toEqual('FOLLOWING_FAILURE');
    done();
  });

  it('test successful follow action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${otherUser}/follow/`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(followAction(otherUser));
    expect(store.getActions()[0].type).toEqual('FOLLOW_SUCCESS');
    done();
  });

  it('test unsuccessful follow action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${otherUser}/follow/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(followAction(otherUser));
    expect(store.getActions()[0].type).toEqual('FOLLOW_FAILURE');
    done();
  });

  it('test successful unfollow action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${otherUser}/follow/`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(unfollowAction(otherUser));
    expect(store.getActions()[0].type).toEqual('UNFOLLOW_SUCCESS');
    done();
  });

  it('test unsuccessful follow action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${otherUser}/follow/`, {
        status: 404,
        response: {
          'user': ['User does not exist']
        }
      });

    await store.dispatch(unfollowAction(otherUser));
    expect(store.getActions()[0].type).toEqual('UNFOLLOW_FAILURE');
    done();
  });
});
