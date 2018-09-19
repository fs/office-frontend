import { databaseRef } from '../../firebase';

export const FETCH_TABLES_START = 'FETCH_TABLES_START';
export const FETCH_TABLES_SUCCESS = 'FETCH_TABLES_SUCCESS';
export const FETCH_TABLES_FAIL = 'FETCH_TABLES_FAIL';

export const fetchTablesStart = () => {
  return {
    type: FETCH_TABLES_START,
  };
};

export const fetchTablesSuccess = tables => {
  return {
    type: FETCH_TABLES_SUCCESS,
    payload: {
      tables,
    },
  };
};

export const fetchTablesFail = error => {
  return {
    type: FETCH_TABLES_FAIL,
    payload: {
      error,
    },
  };
};

export const subscribeTables = () => {
  return dispatch => {
    dispatch(fetchTablesStart());
    databaseRef.ref('/tables1').on('value', snapshot => {
      console.log('Tables check state');
      if (snapshot.val()) {
        dispatch(fetchTablesSuccess(snapshot.val()));
      } else {
        // if snapshot.val == null
        dispatch(fetchTablesSuccess({}));
      }
    });
  };
};
