import ACTION_CONSTANTS from '../constants/constants';

const { PASSWORDCONFIRM, PASSWORDCONFIRMERROR } = ACTION_CONSTANTS;

const initialState = {
  message: '',
  errors: {},  
};

const confirmResetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
  case PASSWORDCONFIRM:
    return {
      ...state,
      message: action.payload,
      errors: {},
    };
  case PASSWORDCONFIRMERROR:
    return {
      ...state,
      errors: action.payload,
      message: '',
    };
  default:
    return state;
  }
}; 

export default confirmResetPasswordReducer;
