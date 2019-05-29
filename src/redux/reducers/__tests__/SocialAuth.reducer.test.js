import SocialReducer from '../SocialAuth.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Social login reducer', () => {
  const initalState = {
    user: {},
    errors: {}
  };

  it('is correct social login', () => {
    const action = {
      type: ACTION_CONSTANTS.LOGIN_SUCCESS,
      response: {
        data: {
          user: {
            'email': 'matthenge@yahoo.com',
            'username': 'JamesMartin',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eiJKYW1lc01hcnRp'
          }
        }
      }
    };
    expect(SocialReducer(initalState, action)).toEqual({
      user: action.response.data.user,
      errors: {}
    });
  });
  it('tests signup failure', () => {
    const action = {
      type: ACTION_CONSTANTS.LOGIN_FAILURE,
      error: {
        response: {
          email: 'A user with the email address exist'
        }
      }
    };

    expect(SocialReducer(initalState, action)).toEqual({
      errors: action.error.response,
      user: {}
    });
  });
  it('tests action with invalid type', () => {
    const action = {
      type: 'dummy type'
    };
    expect(SocialReducer(initalState, action)).toEqual(initalState);
  });
});
