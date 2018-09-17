import * as actionTypes from './actionTypes';
import { databaseRef } from '../../firebase';

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START,
  };
};

export const fetchUserSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const fetchUserFail = error => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const resetUser = () => {
  return {
    type: actionTypes.RESET_USER,
  };
};

export const fetchUser = userId => {
  return dispatch => {
    dispatch(fetchUserStart());
    return databaseRef
      .ref(`/users/${userId}`)
      .once('value')
      .then(snapshot => {
        dispatch(fetchUserSuccess(snapshot.val()));
      })
      .catch(error => {
        dispatch(fetchUserFail(error));
      });
  };
};
