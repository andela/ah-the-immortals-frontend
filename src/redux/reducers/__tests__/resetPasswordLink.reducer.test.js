import resetPasswordLinkReducer from '../resetPasswordLink.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Reset password link reducer', () => {
  const initialState = {
    message: '',
    errors: {}
  };
  it('tests successful email sent', () =>{
    const action = {
      type: ACTION_CONSTANTS.RESETPASSWORDLINK,
      response: {
        data: {
          data: [{
            'message': 'A password reset link has been sent to your email'    
          }]
        }
      }
    };
    expect(resetPasswordLinkReducer(initialState, action)).toEqual({
      message: action.payload,
      errors: {}
    });
  });
  it('tests password change failure if email does not exist', () => {
    const action = {
      type: ACTION_CONSTANTS.RESETPASSWORDLINKERROR,
      error: {
        response: {
          data: {
            errors: {
              email: [
                'No account with that email address'
              ]        
            }
          }
        }
      }
    };
    expect(resetPasswordLinkReducer(initialState, action)).toEqual({
      errors: action.payload,
      message: ''
    });
  });
  it('tests password change failure if token is not valid', () => {
    const action = {
      type: ACTION_CONSTANTS.RESETPASSWORDLINKERROR,
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
    expect(resetPasswordLinkReducer(initialState, action)).toEqual({
      errors: action.payload,
      message: ''
    });
  }); 
  it('Tests action with invalid type', () =>{
    const action = {
      type: 'invalid type'
    };
    expect(resetPasswordLinkReducer(initialState, action)).toEqual(initialState);
  });  
});
  
