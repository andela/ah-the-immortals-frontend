import { toast } from 'react-toastify';

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
  GET_PAGES_NEXT,
  REPORT_POST,
  GET_REPORTS,
  DELETE_REPORT

} from '../constants/types';
import { 
  postArticleApi, 
  getPostsApi, 
  getSingleArticle,
  deleteArticleApi, 
  editArticle,
  getPagesApi, 
  getNextPageApi,
  reportArticleApi,
  getreportsApi,
  deleteReportApi 
} from '../../services/api';

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
export const reportArticleActionCreator = (res) => ({
  type: REPORT_POST,
  payload: res.data
});
export const reportArticle = (slug, postData) =>async dispatch => {
  dispatch(clearErrors());
  try {
    const res = await reportArticleApi(slug, postData);
    dispatch(reportArticleActionCreator(res));
    toast.success('You have succesfully reported this article');
  } catch(err){
    toast.error(err.response.data.error);
    dispatch({
      type: REPORT_POST,
      payload:null
    });
  }
};

export const getReports = () => dispatch => {
  dispatch(setPostLoading());
  return getreportsApi()
    .then(res =>
      dispatch({
        type: GET_REPORTS,
        payload: res.data
      })
    )
    .catch(err =>{if (err) {toast.error('Network Error:Try Refreshing your page slow network');}});
};
export const deleteReport = slug => async dispatch => {
  try {
    await deleteReportApi(slug);
    dispatch({
      type: DELETE_REPORT,
      payload: slug
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
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
