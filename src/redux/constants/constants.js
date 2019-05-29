import firebase from 'firebase';

const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
const SIGNUP_SUCCESS =  'SIGNUP_SUCCESS';
const RESETPASSWORDLINK = 'RESETPASSWORDLINK';
const RESETPASSWORDLINKERROR = 'RESETPASSWORDLINKERROR';
const PASSWORDCONFIRM = 'PASSWORDCONFIRM';
const PASSWORDCONFIRMERROR = 'PASSWORDCONFIRMERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const SOCIAL_FAILURE = 'SOCIAL_FAILURE';
const SOCIAL_SUCCESS =  'SOCIAL_SUCCESS';

const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN;

firebase.initializeApp({
  apiKey: 'AIzaSyDRQUaRMIlzajWELMP7nDEIy6IMOd6hzeM', 
  authDomain: AUTH_DOMAIN
});

const socialAuth = firebase.auth();
const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();
const twitter = new firebase.auth.TwitterAuthProvider();

const  ACTION_CONSTANTS = {
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  RESETPASSWORDLINK, 
  RESETPASSWORDLINKERROR,
  PASSWORDCONFIRM,
  PASSWORDCONFIRMERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SOCIAL_FAILURE,
  SOCIAL_SUCCESS,
  socialAuth,
  facebook,
  google,
  twitter
};

export default ACTION_CONSTANTS;
