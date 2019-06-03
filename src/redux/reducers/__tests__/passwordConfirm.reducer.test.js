import confirmResetPasswordReducer from '../passwordConfirm.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Confirm password reset reducer', () => {
  const initialState = {
    message: '',
    errors: {}
  };
  it('tests correct password change', () =>{
    const action = {
      type: ACTION_CONSTANTS.PASSWORDCONFIRM,
      response: {
        data: {
          data: [{
            'message': 'You have successfully reset your password'    
          }]
        }
      }
    };
    expect(confirmResetPasswordReducer(initialState, action)).toEqual({
      message: action.payload,
      errors: {}
    });
  });
  it('tests password change failure if passwords do not match', () => {
    const action = {
      type: ACTION_CONSTANTS.PASSWORDCONFIRMERROR,
      error: {
        response: {
          data: {
            errors: {
              password: [
                'Passwords did not match'
              ]        
            }
          }
        }
      }
    };
    expect(confirmResetPasswordReducer(initialState, action)).toEqual({
      errors: action.payload,
      message: ''
    });
  });
  it('tests password change failure if token is not valid', () => {
    const action = {
      type: ACTION_CONSTANTS.PASSWORDCONFIRMERROR,
      error: {
        response: {
          data: {
            errors: {
              token: [
                'Invalid token'
              ]        
            }
          }
        }
      }
    };
    expect(confirmResetPasswordReducer(initialState, action)).toEqual({
      errors: action.payload,
      message: ''
    });
  }); 
  it('tests password change failure if password does does not meet criteria', () => {
    const action = {
      type: ACTION_CONSTANTS.PASSWORDCONFIRMERROR,
      error: {
        response: {
          data: {
            errors: {
              password: [
                'password should have at least 2 digits'
              ]        
            }
          }
        }
      }
    };
    expect(confirmResetPasswordReducer(initialState, action)).toEqual({
      errors: action.payload,
      message: ''
    });
  }); 
  it('tests action with invalid type', () =>{
    const action = {
      type: 'invalid type'
    };
    expect(confirmResetPasswordReducer(initialState, action)).toEqual(initialState);
  });  
});
