import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';

const { LIKE_SUCCESS, LIKE_FAILURE } = ACTION_CONSTANTS;
const { likeApi } = APIS;

const successLike = (response) => {
  return {
    type: LIKE_SUCCESS,
    payload: response
  };
};
const failureLike = (response) => {
  return {
    type: LIKE_FAILURE,
    payload: response
  };
};

const likeAction = (slug, type, option) => async (dispatch) => {
  try {
    const response = await likeApi(slug, type, option);
    dispatch(successLike({
      article: response.data.article
    }));
  } catch (error) {
    dispatch(failureLike({
      likeError: error.response.data.detail
    }));
  }
};

export default likeAction;
