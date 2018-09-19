import { authRef, databaseRef, googleProvider } from '../../firebase';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = user => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user,
    },
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    payload: {
      error,
    },
  };
};

export const logoutStart = () => {
  return {
    type: LOGOUT_START,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutFail = error => {
  return {
    type: LOGOUT_FAIL,
    payload: {
      error,
    },
  };
};

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
        return databaseRef.ref('users/' + uid).update(user);
      })
      .catch(error => {
        console.error(error);
        dispatch(authFail(error));
      });
  };
};

export const subscribeAuth = () => {
  return dispatch => {
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
};

export const logout = () => {
  return dispatch => {
    dispatch(logoutStart());
    authRef.signOut().catch(error => {
      dispatch(logoutFail(error));
    });
  };
};
