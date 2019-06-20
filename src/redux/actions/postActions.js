import {
  ADD_POST,
  GET_ERRORS,
  POST_LOADING,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  EDIT_POST,
  GET_PAGES,
  GET_PAGES_NEXT

} from '../constants/types';
import { postArticleApi, getPostsApi, getSingleArticle, deleteArticleApi, editArticle, getPagesApi, getNextPageApi } from '../../services/api';

export const postArticleActionCreator = (res) => ({
  type: ADD_POST,
  payload: res.data
});

export const addPost = (postData, redirect, callBack) => async dispatch => {
  dispatch(clearErrors());
  try {
    const res = await postArticleApi(postData);
    dispatch(postArticleActionCreator(res));
    const { data: { slug } } = res;
    redirect(slug);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data.errors
    });
  } finally {
    callBack();
  }
};

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  return getPostsApi()
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data.results.articles
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};


export const getPost = (slug,token=null) => dispatch => {
  dispatch(setPostLoading());
  return getSingleArticle(slug,token)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};


export const deletePost = slug => async dispatch => {
  try {
    await deleteArticleApi(slug);
    dispatch({
      type: DELETE_POST,
      payload: slug
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


export const editPost = (slug, postData) => dispatch => {
  dispatch(clearErrors());
  return editArticle(slug, postData)
    .then(res =>
      dispatch({
        type: EDIT_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: EDIT_POST,
        payload: null
      })
    );
};

export const getPages = (url) => dispatch => {
  dispatch(setPostLoading());
  return getPagesApi(url)
    .then(res =>
      dispatch({
        type: GET_PAGES,
        payload: res.data,
      })

    )
    .catch(err =>
      dispatch({
        type: GET_PAGES,
        payload: null
      })
    );
};

export const getNextPages = url => dispatch => {
  dispatch(setPostLoading());
  return getNextPageApi(url)
    .then(res =>
      dispatch({
        type: GET_PAGES_NEXT,
        payload: res.data
      })

    )
    .catch(err =>
      dispatch({
        type: GET_PAGES_NEXT,
        payload: null
      })
    );
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
