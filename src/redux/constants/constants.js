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
const SEARCH_SUCCESS='SEARCH_SUCCESS';
const SEARCH_FAILURE='SEARCH_FAILURE';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const FOLLOWERS_SUCCESS = 'FOLLOWERS_SUCCESS';
const FOLLOWERS_FAILURE = 'FOLLOWERS_FAILURE';
const FOLLOWING_SUCCESS = 'FOLLOWING_SUCCESS';
const FOLLOWING_FAILURE = 'FOLLOWING_FAILURE';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_DOMAIN;

firebase.initializeApp({
  apiKey: 'AIzaSyDRQUaRMIlzajWELMP7nDEIy6IMOd6hzeM', 
  authDomain: AUTH_DOMAIN
});

const socialAuth = firebase.auth();
const facebook = new firebase.auth.FacebookAuthProvider();
const google = new firebase.auth.GoogleAuthProvider();
const twitter = new firebase.auth.TwitterAuthProvider();
const FETCH_PROFILE = 'FETCH_PROFILE';
const EDIT_PROFILE = 'EDIT_PROFILE';
const FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR';
const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR';

const LOGOUT = 'LOGOUT';

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
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  socialAuth,
  facebook,
  google,
  twitter,
  FETCH_PROFILE,
  EDIT_PROFILE,
  FETCH_PROFILE_ERROR,
  EDIT_PROFILE_ERROR,
  LOGOUT,
  FOLLOWERS_SUCCESS,
  FOLLOWERS_FAILURE,
  FOLLOWING_SUCCESS,
  FOLLOWING_FAILURE,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE
};

export default ACTION_CONSTANTS;
