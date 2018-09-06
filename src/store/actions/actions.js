import axios from '../../axios';

export const CREATE_TABLE = 'CREATE_TABLE';
export const CREATE_TABLE_SUCCESS = 'CREATE_TABLE_SUCCESS';
export const CREATE_TABLE_FAILURE = 'CREATE_TABLE_FAILURE';

export function addTableAsync(table) {
  return dispatch => {
    dispatch({ type: CREATE_TABLE });
    axios
      .patch(`/tables/${table.tableId}.json`, table.owner)
      .then(res => {
        dispatch({ type: CREATE_TABLE_SUCCESS, payload: res });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CREATE_TABLE_FAILURE, payload: error });
      });
  };
}
