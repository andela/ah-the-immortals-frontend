import { combineReducers } from 'redux';
import SignUpReducer from './SignUp.reducer';
import signInReducer from './SignIn.reducer';
import resetPasswordLinkReducer from './resetPasswordLink.reducer';
import confirmResetPasswordReducer from './passwordConfirm.reducer';
import SocialReducer from './SocialAuth.reducer';
import Profile from './profile.reducer';
import postReducer from './PostReducer';
import errorReducer from './errorReducers';

export default combineReducers({
  resetpasswordlink: resetPasswordLinkReducer,
  confirmresetpassword: confirmResetPasswordReducer,
  signup:SignUpReducer,
  signin:signInReducer,
  social: SocialReducer,
  Profile,
  post: postReducer,
  errors: errorReducer,
});
