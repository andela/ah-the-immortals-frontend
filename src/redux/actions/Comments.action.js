import { toast } from 'react-toastify';
import APIS  from '../../services/api';
import ACTION_CONSTANTS from '../constants/constants';

/*
 *Defines the create_comment actions and dispatches the right
 *action for either success >>createCommentSuccess() or
 *failure >>createCommentFailure()
 */
const { deleteCommentApi, editCommentApi, getCommentsApi, createCommentsApi, createChildCommentApi, getOneCommentApi } = APIS;
const { EDIT_COMMENT, EDIT_COMMENT_FAILURE, DELETE_COMMENT, DELETE_COMMENT_FAILURE, READ_COMMENTS, READ_COMMENTS_FAILURE, CREATE_COMMENT, CREATE_REPLY, CREATE_COMMENT_FAILURE } = ACTION_CONSTANTS;

const getCommentsAction = (slug) => async (dispatch) => {
  try{
    const response = await getCommentsApi(slug);
    dispatch(getCommentSuccess(response.data));
  } catch (error) {
    dispatch(getCommentFailure(error.response));
  }
};

const editCommentAction = (data, slug, id, callBack) => async (dispatch) => {
  try{
    const response = await editCommentApi(data, slug, id);
    dispatch(editCommentSuccess(response.data));
    callBack();
    dispatch(getCommentsAction(slug));
  } catch (error) {
    dispatch(editCommentFailure(error.response));
  }
};

const deleteCommentAction = (slug, id) => async (dispatch) => {
  try{
    const response = await deleteCommentApi(slug, id);
    dispatch(deleteCommentSuccess(response.data));
    dispatch(getCommentsAction(slug));
  } catch (error) {
    dispatch(deleteCommentFailure(error.response));
  }
};

const createCommentAction = (data, slug, callBack) => async (dispatch) => {
  try{
    const response = await createCommentsApi(data, slug);
    dispatch(createCommentSuccess(response.data));
    callBack();
    dispatch(getCommentsAction(slug));
    toast.success('Comment created successfully');
  } catch (error) {
    dispatch(createCommentFailure(error));
  }
};

const createChildCommentAction = (data, slug, id, callBack) => async (dispatch) => {
  try{
    const response = await createChildCommentApi(data, slug, id);
    dispatch(createReplySuccess(response.data));
    callBack();
    dispatch(getCommentsAction(slug));
    toast.success('Reply created successfully');
  } catch (error) {
    dispatch(createCommentFailure(error));
  }
};

/*
 *Defines the action types for successful comment edit
 */
const editCommentSuccess = (response) => ({
  type: EDIT_COMMENT,
  payload: response,
});

/*
 *Defines the action types for unsuccessful comment edit
 */
const editCommentFailure = (error) => ({
  type: EDIT_COMMENT_FAILURE,
  payload: error,
});

/*
 *Defines the action types for successful comment deletion
 */
const deleteCommentSuccess = (response) => ({
  type: DELETE_COMMENT,
  payload: response,
});

/*
 *Defines the action types for unsuccessful comment deletion
 */
const deleteCommentFailure = (error) => ({
  type: DELETE_COMMENT_FAILURE, 
  payload: error,
});

/*
 *Defines the action types for successful comment creation
 */
const createCommentSuccess = (response) => ({
  type: CREATE_COMMENT,
  payload: response,
});

/*
 *Defines the action types for successful reply creation
 */
const createReplySuccess = (response) => ({
  type: CREATE_REPLY,
  payload: response,
});

/*
 *Defines the action types for unsuccessful comment creation
 */
const createCommentFailure = (error) => ({
  type: CREATE_COMMENT_FAILURE,
  payload: error,
});

/*
 *Defines the action types for successful comment retrieval
 */
const getCommentSuccess = (response) => ({
  type: READ_COMMENTS,
  payload: response,
});

/*
 *Defines the action types for unsuccessful comment retrieval
 */
const getCommentFailure = (error) => ({
  type: READ_COMMENTS_FAILURE,
  payload: error,
});

export { createCommentAction, createChildCommentAction, getCommentsAction, editCommentAction, deleteCommentAction };
