import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY || '';

export const updateProfileStart = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_START,
  };
};

export const updateProfileSuccess = (displayName, photoUrl) => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    payload: {
      displayName,
      photoUrl,
    },
  };
};

export const updateProfileFail = error => {
  return {
    type: actionTypes.UPDATE_PROFILE_FAIL,
    payload: {
      error,
    },
  };
};

export const updateProfile = (idToken, displayName, photoUrl) => {
  return dispatch => {
    dispatch(updateProfileStart());
    const updateData = {
      idToken,
      displayName,
      photoUrl,
    };
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=${API_KEY}`;

    axios
      .post(url, updateData)
      .then(response => {
        console.log(response.data);
        dispatch(updateProfileSuccess(response.data.displayName, response.data.photoUrl));
      })
      .catch(error => {
        dispatch(updateProfileFail(error));
      });
  };
};

export const fetchUserProfileStart = () => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_START,
  };
};

export const fetchUserProfileSuccess = (displayName, photoUrl, email) => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
    payload: {
      displayName,
      photoUrl,
      email,
    },
  };
};

export const fetchUserProfileFail = error => {
  return {
    type: actionTypes.FETCH_USER_PROFILE_FAIL,
    payload: {
      error,
    },
  };
};

export const fetchUserProfile = idToken => {
  return dispatch => {
    dispatch(fetchUserProfileStart());
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=${API_KEY}`;

    axios
      .post(url, { idToken })
      .then(response => {
        const displayName = response.data.users[0].displayName;
        const photoUrl = response.data.users[0].photoUrl;
        const email = response.data.users[0].email;
        dispatch(fetchUserProfileSuccess(displayName, photoUrl, email));
      })
      .catch(error => {
        dispatch(fetchUserProfileFail(error));
      });
  };
};
