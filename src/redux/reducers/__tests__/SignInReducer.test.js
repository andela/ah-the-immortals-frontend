import signInReducer from '../SignIn.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('test for sign in reducers', () => {
  const initialState = {
    isAuthenticated: false,
    user: {},
    errors: {}
  };

  it('test successful log in', () => {
    const action = {
      type: ACTION_CONSTANTS.LOGIN_SUCCESS,
      response: {
        data: {
          user: {
            'email': 'testuser@gmail.com',
            'username': 'testusername',
            'token': 'someJWTToken'
          }}
      }
    }; 
    expect(signInReducer(initialState, action)).toEqual({
      currentUser:'testusername',
      isAuthenticated: true,
      user: action.response.data.user,
      errors: {}
    });
  });
  it('test log in failure', () => {
    const action = {
      type: ACTION_CONSTANTS.LOGIN_FAILURE,
      error: {
        response: {
          data:{
            errors:{
              credentials: ['Wrong email or password.']
            }
          }
        }
      }
    };
    expect(signInReducer(initialState, action)).toEqual({
      isAuthenticated: false,
      errors: action.error.response.data.errors,
      user: {}
    });
  });
  it('test invalid type', () => {
    const action = {
      type: 'Haha huhu'
    };
    expect(signInReducer(initialState, action)).toEqual(initialState);
  });

  it('test successfull logout', () => {
    const action = {
      type: ACTION_CONSTANTS.LOGOUT,
    }; 
    expect(signInReducer(initialState, action)).toEqual({
      currentUser:null,
      isAuthenticated: false,
      user: {},
      errors: {}
    });
  });
  it('Tests for app mount', () => {
    const result = signInReducer(initialState, {
      type: 'APP_MOUNT'
    });
    expect(result).toEqual({
      isAuthenticated: false,
      user: {},
      errors: {},
      currentUser: null
    });
  });
});
