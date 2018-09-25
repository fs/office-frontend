import {
  FETCH_TABLES_START,
  FETCH_TABLES_SUCCESS,
  FETCH_TABLES_FAIL,
  SHOW_TABLE_INFO,
  HIDE_TABLE_INFO,
} from './actions';
import { FETCH_USERS_SUCCESS } from '../users/actions';

const initialState = {
  tables: {},
  usersConnections: {},
  currentTableId: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TABLES_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.tables,
        error: null,
        loading: false,
      };
    case FETCH_TABLES_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case FETCH_USERS_SUCCESS: {
      const userIds = Object.keys(action.payload.users);

      const filteredOldConnections = Object.entries(state.usersConnections)
        .filter(entry => !userIds.includes(entry[1]))
        .reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {});

      const newConnections = userIds.reduce(
        (prev, curr) =>
          action.payload.users[curr].tableId
            ? { ...prev, [action.payload.users[curr].tableId]: curr }
            : prev,
        {}
      );

      return {
        ...state,
        usersConnections: {
          ...filteredOldConnections,
          ...newConnections,
        },
      };
    }
    case SHOW_TABLE_INFO:
      return {
        ...state,
        tableId: action.payload.tableId,
      };
    case HIDE_TABLE_INFO:
      return {
        ...state,
        tableId: null,
      };
    default:
      return state;
  }
};

export default reducer;
