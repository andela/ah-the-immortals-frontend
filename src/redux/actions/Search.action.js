import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { SEARCH_SUCCESS, SEARCH_FAILURE } = ACTION_CONSTANTS;
const { SearchArticlesApi } = APIS;

const searchSuccess = (data) => {
  return {
    type: SEARCH_SUCCESS,
    data
  };
};
const searchFailure = (data) => {
  return {
    type: SEARCH_FAILURE,
    data
  };
};
const SearchAction = (data) => async (dispatch) => {
  const response = await SearchArticlesApi(data);
  const result = response.data;
  if (result.message) {
    dispatch(searchFailure({ ...result, value: data.value }));
  } else {
    dispatch(searchSuccess({ ...result, value: data.value }));
  }
};
export default SearchAction;
