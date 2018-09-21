import { databaseRef } from '../../firebase';

export const FETCH_TABLES_START = 'FETCH_TABLES_START';
export const FETCH_TABLES_SUCCESS = 'FETCH_TABLES_SUCCESS';
export const FETCH_TABLES_FAIL = 'FETCH_TABLES_FAIL';

export const fetchTablesStart = () => ({
  type: FETCH_TABLES_START,
});

export const fetchTablesSuccess = tables => ({
  type: FETCH_TABLES_SUCCESS,
  payload: {
    tables,
  },
});

export const fetchTablesFail = error => ({
  type: FETCH_TABLES_FAIL,
  payload: {
    error: error.message,
  },
});

export const subscribeTables = () => dispatch => {
  dispatch(fetchTablesStart());
  databaseRef.ref('/tables1').on('value', snapshot => {
    if (snapshot.exists()) {
      dispatch(fetchTablesSuccess(snapshot.val()));
    }
  });
};
