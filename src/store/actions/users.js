import * as actionTypes from './actionTypes';
import { databaseRef } from '../../firebase';

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START,
  };
};

export const fetchUserSuccess = tables => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    payload: {
      tables,
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

export const fetchUser = userId => {
  return dispatch => {
    dispatch(fetchUserStart());
    databaseRef
      .ref(`/tables/${userId}`)
      .once('value')
      .then(snapshot => {
        dispatch(fetchUserSuccess(snapshot.val()));
      })
      .catch(error => {
        dispatch(fetchUserFail(error));
      });
  };
};
