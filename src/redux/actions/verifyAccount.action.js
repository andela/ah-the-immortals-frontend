import { toast } from 'react-toastify';
import APIS  from '../../services/api';
import ACTION_CONSTANTS from '../constants/constants';

const { VERIFY_ACCOUNT, VERIFY_ACCOUNT_FAILURE } = ACTION_CONSTANTS;
const { verifyAccountApi } = APIS;

const verifyAccountAction = (token) => async (dispatch) => {
  try {
    const response = await verifyAccountApi(token);
    dispatch(verifyAccountSuccess(response.data));
  } catch (error){
    error.response ? (dispatch(verifyAccountFailure(error))):
      toast.error('Something went wrong. Try again!');
    
  }
};

const verifyAccountSuccess = (response) => ({
  type: VERIFY_ACCOUNT,
  payload: response
});

const verifyAccountFailure = (error) => ({
  type: VERIFY_ACCOUNT_FAILURE,
  payload: error
});

export default verifyAccountAction;
