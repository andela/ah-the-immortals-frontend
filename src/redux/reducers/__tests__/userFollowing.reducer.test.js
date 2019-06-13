import followingReducer from '../userFollowing.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Test following reducer', () => {
  it('test successful fetch of following', () => {
    const action = {
      type: ACTION_CONSTANTS.FOLLOWING_SUCCESS,
      response: {
        data: {
          profile: {
            following: [
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
            count: 1
          }
        }
      }
    };
    expect(followingReducer({}, action)).toEqual({
      data: action.response.data.profile.following,
      userCount: action.response.data.profile.count,
      error: {}
    });
  });

  it('test unsuccessful fetch of following', () => {
    const action = {
      type: ACTION_CONSTANTS.FOLLOWING_FAILURE,
      error: {
        request: {
          response: {
            'profile': {
              'detail': 'The token used has expired. Please authenticate again!'
            }
          }
        }
      }
    };
    expect(followingReducer({}, action)).toEqual({
      error: action.error.request.response,
      data: {}
    });
  });

  it('test initial state', () => {
    const action = {
      type: 'default state',
      data: [],
      errors: {},
      userCount: 0
    };
    expect(followingReducer({}, action)).toEqual({});
  });
});
