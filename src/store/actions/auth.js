import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY || '';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token,
      userId,
    },
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
    if (!isSignUp) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
    }

    axios
      .post(url, authData)
      .then(response => {
        console.log(response);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeOut(response.data.expiresIn));
      })
      .catch(error => {
        console.log(error.response);
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};

export const updateProfileStart = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_START,
  };
};

export const updateProfileSuccess = (email, displayName, photoUrl) => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    payload: {
      email,
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
        dispatch(
          updateProfileSuccess(
            response.data.email,
            response.data.displayName,
            response.data.photoUrl
          )
        );
      })
      .catch(error => {
        dispatch(updateProfileFail(error));
      });
  };
};
