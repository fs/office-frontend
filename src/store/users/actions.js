import { databaseRef } from '../../firebase';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';
export const SET_TABLE_START = 'SET_TABLE_START';
export const SET_TABLE_SUCCESS = 'SET_TABLE_SUCCESS';
export const SET_TABLE_FAIL = 'SET_TABLE_FAIL';

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    users,
  },
});

export const fetchUsersFail = error => ({
  type: FETCH_USERS_FAIL,
  payload: {
    error,
  },
});

export const subscribeUsers = () => dispatch => {
  dispatch(fetchUsersStart());
  databaseRef.ref('/users').on('value', snapshot => {
    if (snapshot.exists()) {
      dispatch(fetchUsersSuccess(snapshot.val()));
    }
  });
};

export const setTableStart = () => ({
  type: SET_TABLE_START,
});

export const setTableSuccess = user => ({
  type: SET_TABLE_SUCCESS,
  payload: {
    user,
  },
});

export const setTableFail = error => ({
  type: SET_TABLE_FAIL,
  payload: {
    error,
  },
});

export const setTable = (userId, tableId) => dispatch => {
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
