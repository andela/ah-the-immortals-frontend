import { toast } from 'react-toastify';
import ACTION_CONSTANT from '../constants/constants';

const { FETCH_PROFILE, EDIT_PROFILE, FETCH_PROFILE_ERROR, 
  EDIT_PROFILE_ERROR, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
} = ACTION_CONSTANT;

const initialState = {
  profile: {
    following: false,
  },
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

  case FOLLOW_SUCCESS:
    return {
      ...state, 
      profile: {
        ...state.profile,
        following: true,
      }
    };

  case UNFOLLOW_SUCCESS:
    return {
      ...state, profile: {
        ...state.profile,
        following: false
      }
    };
  case UNFOLLOW_FAILURE:
    return state;

  case FOLLOW_FAILURE:
    return state;

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
