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

export const setTableStart = () => {
  return {
    type: actionTypes.SET_TABLE_START,
  };
};

export const setTableSuccess = user => {
  return {
    type: actionTypes.SET_TABLE_SUCCESS,
    payload: {
      user,
    },
  };
};

export const setTableFail = error => {
  return {
    type: actionTypes.SET_TABLE_FAIL,
    payload: {
      error,
    },
  };
};

export const setTable = (userId, tableId) => {
  return dispatch => {
    dispatch(setTableStart());
    return databaseRef
      .ref(`/users/${userId}`)
      .update({
        tableId,
      })
      .then(() => {
        dispatch(setTableSuccess());
      })
      .catch(error => {
        dispatch(setTableFail(error));
      });
  };
};

export const fetchUserByTableStart = () => {
  return {
    type: actionTypes.FETCH_USER_BY_TABLE_START,
  };
};

export const fetchUserByTableSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_BY_TABLE_SUCCESS,
    payload: {
      user,
    },
  };
};

export const fetchUserByTableFail = error => {
  return {
    type: actionTypes.FETCH_USER_BY_TABLE_FAIL,
    payload: {
      error,
    },
  };
};

export const fetchUserByTable = tableId => {
  return dispatch => {
    dispatch(fetchUserByTableStart());
    return databaseRef
      .ref('/users')
      .orderByChild('tableId')
      .equalTo(tableId)
      .once('value')
      .then(snapshot => {
        const rawUser = snapshot.val();
        const user = rawUser && Object.values(snapshot.val())[0];
        dispatch(fetchUserByTableSuccess(user));
      })
      .catch(error => {
        dispatch(fetchUserByTableFail(error));
      });
  };
};
