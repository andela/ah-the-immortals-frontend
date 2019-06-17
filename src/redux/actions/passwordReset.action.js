import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';
import toastfunc from '../../services/toastReusable';

const { resetPasswordLinkAPI } = APIS;
const { RESETPASSWORDLINK, RESETPASSWORDLINKERROR } = ACTION_CONSTANTS;

const emailError = (errors) => ({
  type: RESETPASSWORDLINKERROR,
  payload: errors
});

const getLinkSuccess = (response) => ({
  type: RESETPASSWORDLINK,
  payload: response
});

const resetPasswordLinkAction = (data) => async (dispatch) => {
  try {
    const response = await resetPasswordLinkAPI(data);
    dispatch(getLinkSuccess(response));
    toastfunc(response.data);
  } catch (error) {
    dispatch(emailError(error));
  }
};

export default resetPasswordLinkAction;
