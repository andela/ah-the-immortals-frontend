import Profile from '../profile.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Profile reducer', () => {
  it('profile details are sent successfully', () => {
    const action = {
      type: ACTION_CONSTANTS.EDIT_PROFILE,
      response: {
        data: {
          profile: {
            first_name: 'testuser'
          }
        }
      }
    };
    expect(Profile({}, action)).toEqual({
      profile: action.response.data.profile,
      errors: {}
    });
  });
  it('test successful fetch profile', () => {
    const payload = {
      'profile': {
        'username': 'eric',
        'first_name': 'Abraham',
        'last_name': 'Kamau',
        'bio': 'this is a test for fetch',
        'following': false
      }
    };
    expect(Profile({}, { type: ACTION_CONSTANTS.FETCH_PROFILE }).payload).toEqual();
  });

  it('test edit profile with errors', () => {
    const action = {
      type: ACTION_CONSTANTS.EDIT_PROFILE_ERROR,
      errors: {
        user: ['User does not exist']
      }
    };
    expect(Profile({}, action)).toEqual({
      errors: action.errors,
      profile: {}
    });
  });

  it('test fetch profile with errors', () => {
    const action = {
      type: ACTION_CONSTANTS.FETCH_PROFILE_ERROR,
      errors: {
        user: ['User does not exist']
      }
    };
    expect(Profile({}, action)).toEqual({
      errors: action.errors,
      profile: {}
    });
  });

  it('test initial state', () => {
    const action = {
      type: 'default state',
      profile: {},
      errors: {}
    };
    expect(Profile({}, action)).toEqual({});
  });

  it('test successful follow user', () => {
    const payload = {
      'profile': {
        'username': 'eric',
        'first_name': 'Abraham',
        'last_name': 'Kamau',
        'bio': 'this is a test for fetch',
        'following': true
      }
    };
    expect(Profile({}, { type: ACTION_CONSTANTS.FOLLOW_SUCCESS }).payload).toEqual();
  });

  it('test successful unfollow user', () => {
    const payload = {
      'profile': {
        'username': 'eric',
        'first_name': 'Abraham',
        'last_name': 'Kamau',
        'bio': 'this is a test for fetch',
        'following': false
      }
    };
    expect(Profile({}, { type: ACTION_CONSTANTS.UNFOLLOW_SUCCESS }).payload).toEqual();
  });

  it('test unsuccessful follow', () => {
    const action = {
      type: ACTION_CONSTANTS.FOLLOW_FAILURE,
      profile: {
        following: false,
      },
      errors: {}
    };
    expect(Profile({}, action)).toEqual({});
  });

  it('test unsuccessful unfollow', () => {
    const action = {
      type: ACTION_CONSTANTS.UNFOLLOW_FAILURE,
      profile: {
        following: false,
      },
      errors: {}
    };
    expect(Profile({}, action)).toEqual({});
  });
});
