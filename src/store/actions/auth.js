import * as actionTypes from './actionTypes';
import axios from 'axios';
import { authRef, databaseRef, googleProvider } from '../../firebase';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY || '';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = user => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      user,
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

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

export const logoutFail = error => {
  return {
    type: actionTypes.LOGOUT_FAIL,
    payload: {
      error,
    },
  };
};

// export const logout = () => {
//   // localStorage.removeItem('token');
//   // localStorage.removeItem('userId');
//   // localStorage.removeItem('expirationDate');
//   return {
//     type: actionTypes.AUTH_LOGOUT,
//   };
// };

// .then(result => {
//   return dbRef.ref('users/:id').set({});
// })
// .then(result => {
//   console.log(result);
//   dispatch(authSuccess(result));
// })

export const auth = () => {
  return dispatch => {
    dispatch(authStart());
    return authRef
      .signInWithPopup(googleProvider)
      .then(result => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        };
        const uid = result.user.uid;
        return databaseRef
          .ref('users/' + uid)
          .set(user)
          .then(() => user);
      })
      .then(user => {
        console.log(user);
        dispatch(authSuccess(user));
      })
      .catch(error => {
        console.log('Error', error);
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    authRef.onAuthStateChanged(result => {
      if (result) {
        console.log('Yeah boy', result);
        const user = {
          name: result.displayName,
          email: result.email,
          photoUrl: result.photoURL,
        };
        dispatch(authSuccess(user));
      } else {
        console.log(':(');
        dispatch(logout());
      }
    });
  };
};

export const logout = () => {
  return dispatch => {
    authRef
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
        console.log('Sign out success');
      })
      .catch(error => {
        console.log(error);
        dispatch(logoutFail(error));
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
