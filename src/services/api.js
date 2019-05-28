import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_BASE_URL;
const signupUrl = `${ROOT_URL}/users/`;
const signUpApi = (data) => axios.post(signupUrl, data);

const APIS = {
  signUpApi
};

export default APIS;
