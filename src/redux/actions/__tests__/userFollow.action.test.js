import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewProfile from '../../../views/profiles/ViewProfile';
import { userFollowersAction, userFollowingAction, followAction, unfollowAction } from '../userFollow.action';
import { fetchProfile, editProfile, getProfile } from '../profile.actions';
import tokenDecoded from '../../../services/tokenDecoder';

describe('Test userfollow actions', () => {

  let testStore = configureMockStore([thunk]);
  let store = testStore(
    {
      Profile: {profile: {username: 'john'} }, 
      following: {
        data: [
          {
            'username': 'slim',
            'first_name': '',
            'last_name': '',
            'bio': '',
            'img_url': 'https://res.cloudinary.com/grean/image/upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
            'created_at': '2019-05-30 11:52:18',
            'updated_at': '2019-06-13 17:59:21',
            'following': true
          }
        ],
        errors: {},
        count: 0
      },
      followers: {
        users: [
          {
            'username': 'slim',
            'first_name': '',
            'last_name': '',
            'bio': '',
            'img_url': 'https://res.cloudinary.com/grean/image/upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
            'created_at': '2019-05-30 11:52:18',
            'updated_at': '2019-06-13 17:59:21',
            'following': true
          }
        ],
        error: {},
        userCount: 0
      }
    });
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  const username = 'john';
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

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ViewProfile
          match={{params: {profile: {}}, isExact: true, path: 'profile/john', url: ''}} 
        />
      </BrowserRouter>
    </Provider>
  );

  it('test successful fetch followers actions', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/profiles/${username}/followers/`, {
        status: 200,
        response: {
          profile
        }
      });

    await store.dispatch(userFollowersAction('john'));
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

    await store.dispatch(userFollowersAction('john'));
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

    await store.dispatch(userFollowingAction('john'));
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

    await store.dispatch(userFollowingAction('john'));
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
