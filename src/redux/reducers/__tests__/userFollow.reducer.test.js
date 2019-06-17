import followReducer from '../userFollow.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Test followers reducer', () => {
  it('test successful fetch of followers', () => {
    const action = {
      type: ACTION_CONSTANTS.FOLLOWERS_SUCCESS,
      response: {
        data: {
          profile: {
            followers: [
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
    expect(followReducer({}, action)).toEqual({
      users: action.response.data.profile.followers,
      count: action.response.data.profile.count,
      errors: {}
    });
  });

  it('test unsuccessful fetch of followers', () => {
    const action = {
      type: ACTION_CONSTANTS.FOLLOWERS_FAILURE,
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
    expect(followReducer({}, action)).toEqual({
      errors: action.error.request.response,
      users: {}
    });
  });

  it('test default state', () => {
    const action = {
      type: 'default state',
      users: [],
      errors: {},
      count: 0
    };
    expect(followReducer({}, action)).toEqual({});
  });
});
