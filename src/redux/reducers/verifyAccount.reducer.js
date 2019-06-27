import ACTION_CONSTANTS from '../constants/constants';

const { VERIFY_ACCOUNT, VERIFY_ACCOUNT_FAILURE } = ACTION_CONSTANTS;

const initialState = {
  message: {},
  error: {},
  isActivating: true
};

const VerifyAccountReducer = (state = initialState, action) => {
  switch (action.type) {
  case VERIFY_ACCOUNT:
    return {
      ...state,
      message: action.payload,
      error: {}, 
      isActivating: false
    };
  case VERIFY_ACCOUNT_FAILURE:
    return {
      ...state, 
      message: {},
      error: action.payload, 
      isActivating: false
    };
  default:
    return state;
  }
};

export default VerifyAccountReducer;
