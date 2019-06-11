import axios from 'axios';
import jwtDecode from 'jwt-decode';
import tokenDecoded from './tokenDecoder';



export const ROOT_URL = process.env.REACT_APP_BASE_URL;

const signupUrl = `${ROOT_URL}/users/`;
const signInUrl = `${ROOT_URL}/users/login/`;
const resetUrl = `${ROOT_URL}/users/password/reset/`;
const socialAuthUrl = `${ROOT_URL}/users/oauth/`;
const resetconfirmUrl = `${ROOT_URL}/users/password/reset/confirm/`;
const token = window.localStorage.getItem('token');
const signUpApi = (data) => axios.post(signupUrl, data);
const signInApi = (data) => axios.post(signInUrl, data);
const resetPasswordLinkAPI = (data) => axios.post(resetUrl, data);
const resetconfirmPasswordAPI = (data) => axios.post(resetconfirmUrl + data.token, data);
const socialAuthApi = (data) => axios.post(socialAuthUrl, data);

const axiosHeader = {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${token}`
  },
};
const articlesUrl = `${ROOT_URL}/articles`;
export const profileApi = (data, username) => axios.patch(
  `${ROOT_URL}/profiles/${username}/`,
  data,
  axiosHeader
);
export const fetchProfileApi = (username) => axios.get(`${ROOT_URL}/profiles/${username}`);

const SearchArticlesApi = (data) => {
  if (data.author) {
    return axios.get(`${articlesUrl}/?author=${data.author}`);
  } else if (data.tag) {
    return axios.get(`${articlesUrl}/?tags=${data.tag}`);
  } else {
    return axios.get(`${articlesUrl}/?title=${data.title}`);
  }
};
const APIS = {
  resetPasswordLinkAPI,
  resetconfirmPasswordAPI,
  signUpApi,
  signInApi,
  socialAuthApi,
  SearchArticlesApi
};

export default APIS;
const decoded = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
};
const userData = decoded(token);
export const CurrentUser = userData ? userData.user_data.username:null;


export const postArticleApi = (postData) => axios.post(`${articlesUrl}/`, postData, axiosHeader);
export const getPostsApi = () => axios.get(articlesUrl);
export const getSingleArticle = (slug) => axios.get(`${articlesUrl}/${slug}`);
export const deleteArticleApi = (slug) => {
  return axios.delete(`${articlesUrl}/${slug}`, axiosHeader);
};
export const  editArticle = (slug, postData) => axios.patch(`${articlesUrl}/${slug}/`, postData, axiosHeader);
