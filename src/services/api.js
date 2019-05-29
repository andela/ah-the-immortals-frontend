import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_BASE_URL;
const signupUrl = `${ROOT_URL}/users/`;
const signInUrl = `${ROOT_URL}/users/login/`;
const resetUrl = `${ROOT_URL}/users/password/reset/`;
const resetconfirmUrl = `${ROOT_URL}/users/password/reset/confirm/`;
const signUpApi = (data) => axios.post(signupUrl, data);
const signInApi = (data) => axios.post(signInUrl, data);
const resetPasswordLinkAPI = (data) => axios.post(resetUrl, data);
const resetconfirmPasswordAPI = (data) => axios.post(resetconfirmUrl+data.token, data);


const APIS = {
  resetPasswordLinkAPI,
  resetconfirmPasswordAPI,
  signUpApi,
  signInApi
};

export default APIS;
