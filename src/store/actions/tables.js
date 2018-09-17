import * as actionTypes from './actionTypes';
import { authRef, databaseRef, googleProvider } from '../../firebase';

export const fetchTablesStart = () => {
  return {
    type: actionTypes.FETCH_TABLES_START,
  };
};

export const fetchTablesSuccess = tables => {
  return {
    type: actionTypes.FETCH_TABLES_SUCCESS,
    payload: {
      tables,
    },
  };
};

export const fetchTablesFail = error => {
  return {
    type: actionTypes.FETCH_TABLES_FAIL,
    payload: {
      error,
    },
  };
};

//fix tables 1 in production
export const fetchTables = () => {
  return dispatch => {
    dispatch(fetchTablesStart());
    databaseRef
      .ref('/tables1')
      .once('value')
      .then(snapshot => {
        dispatch(fetchTablesSuccess(snapshot.val()));
      })
      .catch(error => {
        dispatch(fetchTablesFail(error));
      });
  };
};

export const tablesCheckState = () => {
  return dispatch => {
    dispatch(fetchTablesStart());
    databaseRef.ref('/tables1').on('value', snapshot => {
      console.log('Tables check state');
      if (snapshot.val()) {
        dispatch(fetchTablesSuccess(snapshot.val()));
      } else {
        dispatch(fetchTablesSuccess({}));
      }
    });
  };
};

export const setUserStart = () => {
  return {
    type: actionTypes.SET_USER_START,
  };
};

export const setUserSuccess = () => {
  return {
    type: actionTypes.SET_USER_SUCCESS,
  };
};

export const setUserFail = error => {
  return {
    type: actionTypes.SET_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const setUser = (tableId, userId) => {
  return dispatch => {
    dispatch(setUserStart());
    return databaseRef
      .ref(`/tables1/${tableId}`)
      .update({
        userId,
      })
      .then(() => {
        dispatch(setUserSuccess());
      })
      .catch(error => {
        dispatch(setUserFail(error));
      });
  };
};

export const deleteUserStart = () => {
  return {
    type: actionTypes.DELETE_USER_START,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
  };
};

export const deleteUserFail = error => {
  return {
    type: actionTypes.DELETE_USER_FAIL,
    payload: {
      error,
    },
  };
};

export const deleteUser = (tableId, updatedTable) => {
  return dispatch => {
    console.log(tableId, updatedTable);
    dispatch(deleteUserStart());
    return databaseRef
      .ref(`/tables1/${tableId}`)
      .set(updatedTable)
      .then(() => {
        dispatch(deleteUserSuccess());
      })
      .catch(error => {
        dispatch(deleteUserFail(error));
      });
  };
};
