import axios from '../../axios';
import * as actionTypes from '../actions/actionTypes';

export function addTableAsync(table) {
  return dispatch => {
    dispatch({ type: actionTypes.CREATE_TABLE });
    axios
      .patch(`/tables/${table.tableId}.json`, table.owner)
      .then(res => {
        dispatch({ type: actionTypes.CREATE_TABLE_SUCCESS, payload: res });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: actionTypes.CREATE_TABLE_FAILURE, payload: error });
      });
  };
}
export const getTablesSuccess = tables => {
  return {
    type: actionTypes.FETCH_TABLES_SUCCESS,
    payload: {
      tables,
    },
  };
};

export function getTablesAsync() {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_TABLES });
    axios
      .get(`/tables.json`)
      .then(res => {
        dispatch(getTablesSuccess(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: actionTypes.FETCH_TABLES_FAILURE, payload: error });
      });
  };
}

export function deleteTableAsync(table) {
  return dispatch => {
    dispatch({ type: actionTypes.DELETE_TABLE });
    axios
      .delete(`/tables/${table.tableId}.json`, table.owner)
      .then(res => {
        dispatch({ type: actionTypes.DELETE_TABLE_SUCCESS, payload: res });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: actionTypes.DELETE_TABLE_FAILURE, payload: error });
      });
  };
}
