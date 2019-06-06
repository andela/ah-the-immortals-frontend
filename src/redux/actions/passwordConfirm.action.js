import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';
import toastfunc from '../../services/toastReusable';

const { resetconfirmPasswordAPI } = APIS;
const { PASSWORDCONFIRM, PASSWORDCONFIRMERROR } = ACTION_CONSTANTS;

const confirmError = (error) => ({
  type: PASSWORDCONFIRMERROR,
  payload: error
});

const confirmPasswordSuccess = (response) => ({
  type: PASSWORDCONFIRM,
  payload: response
});

const confirmPasswordResetAction = (data, cb) => async (dispatch) => {
  try {
    const response = await resetconfirmPasswordAPI(data);
    dispatch(confirmPasswordSuccess(response));
    toastfunc(response.data);
    cb();
  } catch (error) {
    dispatch(confirmError(error));
    toastfunc(error);
  }
};

export default confirmPasswordResetAction;
