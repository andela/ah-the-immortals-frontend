import { combineReducers } from 'redux';
import SignUpReducer from './SignUp.reducer';

export default combineReducers({
  signup:SignUpReducer
});
