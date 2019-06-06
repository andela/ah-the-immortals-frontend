import ACTION_CONSTANTS from '../constants/constants';

const { RESETPASSWORDLINK, RESETPASSWORDLINKERROR } = ACTION_CONSTANTS;

const initialState = {
  message: '',
  errors: {},  
};

const resetPasswordLinkReducer = (state = initialState, action) => {
  switch (action.type) {
  case RESETPASSWORDLINK:
    return {
      ...state,
      message: action.payload,
      errors: {},
    };
  case RESETPASSWORDLINKERROR:
    return {
      ...state,
      errors: action.payload,
      message: '',
    };
  default:
    return state;
  }
}; 

export default resetPasswordLinkReducer;
