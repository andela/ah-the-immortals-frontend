import { toast } from 'react-toastify';
import ACTION_CONSTANST from '../constants/constants';

const { FETCH_PROFILE, EDIT_PROFILE, FETCH_PROFILE_ERROR, EDIT_PROFILE_ERROR } = ACTION_CONSTANST;

const initialState = {
  profile: {},
  errors: {}
};

const Profile = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROFILE:
    return {
      ...state,
      profile: action.payload,
      errors: {}
    };

  case FETCH_PROFILE_ERROR:
    toast.error((action.errors.user[0]), {
      position: toast.POSITION.TOP_CENTER,
      toastId: 1
    });
    return {
      ...state,
      errors: action.errors,
      profile: {}
    };

  case EDIT_PROFILE:
    toast.success('Profile updated Successfully', {
      position: toast.POSITION.TOP_CENTER,
      toastId: 2
    });  
    return {
      ...state,
      profile: action.response.data.profile,
      errors: {}
    };

  case EDIT_PROFILE_ERROR:
    toast.error((action.errors.user[0]), {
      position: toast.POSITION.TOP_CENTER,
      toastId: 3
    });
    return {
      ...state,
      errors: action.errors,
      profile: {}
    };
  default:
    return state;
  }
};

export default Profile;
