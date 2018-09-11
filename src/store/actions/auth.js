import * as actionTypes from './actionTypes';
import axios from 'axios';
import { auth, googleProvider } from '../../firebase';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY || '';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = userData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      ...userData,
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
  // localStorage.removeItem('token');
  // localStorage.removeItem('userId');
  // localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const signIn = () => {
  return dispatch => {
    dispatch(authStart());
    return auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log(result);
        dispatch(authSuccess());
      })
      .catch(error => {
        console.log('Error', error);
        dispatch(authFail(error));
      });
  };
};

// export const authCheckState = () => {
//   return dispatch => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       dispatch(logout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem('expirationDate'));

//       if (expirationDate <= new Date()) {
//         dispatch(logout());
//       } else {
//         const userId = localStorage.getItem('userId');
//         dispatch(authSuccess(token, userId));
//         dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
//       }
//     }
//   };
// };
