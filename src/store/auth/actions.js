import { authRef, databaseRef, googleProvider } from '../../firebase';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  payload: {
    user,
  },
});

export const authFail = error => ({
  type: AUTH_FAIL,
  payload: {
    error,
  },
});

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = error => ({
  type: LOGOUT_FAIL,
  payload: {
    error,
  },
});

export const auth = () => dispatch => {
  dispatch(authStart());
  return authRef
    .signInWithPopup(googleProvider)
    .then(result => {
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
      };
      const { uid } = result.user;
      return databaseRef.ref(`users/${uid}`).update(user);
    })
    .catch(error => {
      console.error(error);
      dispatch(authFail(error));
    });
};

export const subscribeAuth = () => dispatch => {
  dispatch(authStart());
  authRef.onAuthStateChanged(result => {
    if (result) {
      const user = {
        name: result.displayName,
        email: result.email,
        photoUrl: result.photoURL,
        userId: result.uid,
      };
      dispatch(authSuccess(user));
    } else {
      dispatch(logoutSuccess());
    }
  });
};

export const logout = () => dispatch => {
  dispatch(logoutStart());
  authRef.signOut().catch(error => {
    dispatch(logoutFail(error));
  });
};
