import { toast } from 'react-toastify';
import ACTION_CONSTANTS from '../constants/constants';
import APIS from '../../services/api';
import { getCommentsAction } from './Comments.action';

const { LIKE_COMMENT, LIKE_COMMENT_FAILURE } = ACTION_CONSTANTS;
const { likeCommentApi } = APIS;

const likeCommentAction = (slug, id, vote_type) => async (dispatch) => {
  try{
    const response = await likeCommentApi(id, vote_type);
    dispatch(likeCommentSuccess(response));
    dispatch(getCommentsAction(slug));
  } catch (error) {
    error.response ? 
      dispatch(likeCommentFailure(error)): 
      toast.error('Something went wrong. Try again!');
  }
};

/*
 *Defines the action types for successful comment like or dislike
 */
const likeCommentSuccess = (response) => {
  return {
    type: LIKE_COMMENT,
    payload: response
  };
};

/*
 *Defines the action types for unsuccessful comment like or dislike
 */
const likeCommentFailure = (error) => {
  return {
    type: LIKE_COMMENT_FAILURE,
    payload: error
  };
};

export default likeCommentAction;
