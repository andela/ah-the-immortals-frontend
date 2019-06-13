import axios from 'axios';
import jwtDecode from 'jwt-decode';


const ROOT_URL = process.env.REACT_APP_BASE_URL;

const signupUrl = `${ROOT_URL}/users/`;
const signInUrl = `${ROOT_URL}/users/login/`;
const resetUrl = `${ROOT_URL}/users/password/reset/`;
const socialAuthUrl = `${ROOT_URL}/users/oauth/`;
const resetconfirmUrl = `${ROOT_URL}/users/password/reset/confirm/`;
const token = window.localStorage.getItem('token');
const token_decoded = (user) => {
  try {
    user = jwtDecode(token);
    return user;
  } catch (error) {
    user = { user_data: { username: 'undefined' } };
    return user;
  }
};
export const username = token_decoded().user_data.username;
const profileUrl = `${ROOT_URL}/profiles/${username}/`;
const getProfileUrl = `${ROOT_URL}/profiles/${username}`;
const signUpApi = (data) => axios.post(signupUrl, data);
const signInApi = (data) => axios.post(signInUrl, data);
const resetPasswordLinkAPI = (data) => axios.post(resetUrl, data);
const resetconfirmPasswordAPI = (data) => axios.post(resetconfirmUrl+data.token, data);
const socialAuthApi = (data) => axios.post(socialAuthUrl, data);

const axiosHeader = {
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${token}`
  },
};

export const profileApi = (data) => axios.patch(profileUrl, data, axiosHeader);
export const fetchProfileApi = () => axios.get(getProfileUrl);

const APIS = {
  resetPasswordLinkAPI,
  resetconfirmPasswordAPI,
  signUpApi,
  signInApi,
  socialAuthApi
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


export const ROOTS_URL = 'https://ah-the-immortals-staging.herokuapp.com/api';
const articlesUrl = `${ROOTS_URL}/articles`;
export const postArticleApi = (postData) => axios.post(`${articlesUrl}/`, postData, axiosHeader);
export const getPostsApi = () => axios.get(articlesUrl);
export const getSingleArticle = (slug) => axios.get(`${articlesUrl}/${slug}`);
export const deleteArticleApi = (slug) => {
  return axios.delete(`${articlesUrl}/${slug}`, axiosHeader);
};
export const  editArticle = (slug, postData) => axios.patch(`${articlesUrl}/${slug}/`, postData, axiosHeader);
