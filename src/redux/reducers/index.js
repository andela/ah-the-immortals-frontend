import { combineReducers } from 'redux';
import SignUpReducer from './SignUp.reducer';
import signInReducer from './SignIn.reducer';
import resetPasswordLinkReducer from './resetPasswordLink.reducer';
import confirmResetPasswordReducer from './passwordConfirm.reducer';

export default combineReducers({
  resetpasswordlink: resetPasswordLinkReducer,
  confirmresetpassword: confirmResetPasswordReducer,
  signup:SignUpReducer,
  signin:signInReducer
});
