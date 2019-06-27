import ACTION_CONSTANTS from '../../constants/constants';
import VerifyAccountReducer from '../verifyAccount.reducer';

describe('Tests VerifyAccountReducer', () => {
  const initialState = {
    message: {},
    error: {},
    isActivating: true
  };

  it('tests successful account verification', () => {
    const action = {
      type: ACTION_CONSTANTS.VERIFY_ACCOUNT,
      response: {}
    };
    expect(VerifyAccountReducer(initialState, action)).toEqual({
      message: action.payload,
      error: {},
      isActivating: false
    });
  });

  it('tests unsucessful account verification', () => {
    const action = {
      type: ACTION_CONSTANTS.VERIFY_ACCOUNT_FAILURE,
      error:{}
    };
    expect(VerifyAccountReducer(initialState, action)).toEqual({
      message: {},
      error: action.payload,
      isActivating: false
    });
  });
  it('tests invalid action type', () => {
    const action = {
      type: 'invalid'
    };
    expect(VerifyAccountReducer(initialState, action)).toEqual(initialState);
  });
});
