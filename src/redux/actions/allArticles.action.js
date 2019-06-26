import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { getAllApi } = APIS;
const { FETCH_ALL, FETCH_FAIL } = ACTION_CONSTANTS;

export const allArticlesSuccess = (response) => ({
  type: FETCH_ALL,
  response
});

export const allArticlesFailure = (error) => ({
  type: FETCH_FAIL,
  error
});

export const getAllArticles = () => async (dispatch) => {
  try {
    const response = await getAllApi();
    dispatch(allArticlesSuccess(response));
  } catch (error) {
    dispatch(allArticlesFailure(error));
  }
};
