import SignupReducer, { errorChecker } from '../SignUp.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Signup reducer', () => {
  const initalState = {
    isAuthenticated: false,
    user: {},
    errors: {}
  };

  it('is correct signup', () => {
    const action = {
      type: ACTION_CONSTANTS.SIGNUP_SUCCESS,
      response: {
        data: {
          user: {
            username: 'testuser',
            email: 'testuser@gmail.com'
          }
        }
      }
    };
    expect(SignupReducer(initalState, action)).toEqual({
      isAuthenticated: true,
      user: action.response.data.user,
      errors: {}
    });
  });

  it('tests signup failure', () => {
    const action = {
      type: ACTION_CONSTANTS.SIGNUP_FAILURE,
      error: {
        response: {
          data: {
            errors: {
              email: ['A user with the email address exist']
            }
          }
        }
      }
    };

    expect(SignupReducer(initalState, action)).toEqual({
      isAuthenticated: false,
      errors: action.error.response.data.errors,
      user: {}
    });
  });

  it('tests action with invalid type', () => {
    const action = {
      type: 'dummy type'
    };
    expect(SignupReducer(initalState, action)).toEqual(initalState);
  });

  it('checks errors used in toasts', () => {
    let errors = {
      email: ['A user with that email address exists']
    };
    expect(errorChecker(errors)).toEqual(errors.email[0]);
    errors = {
      username: ['A user with that username exists']
    };
    expect(errorChecker(errors)).toEqual(errors.username[0]);
    errors = {
      password: ['invalid password']
    };
    expect(errorChecker(errors)).toEqual(errors.password[0]);
  });
});
