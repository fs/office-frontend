import { FETCH_TABLES_START, FETCH_TABLES_SUCCESS, FETCH_TABLES_FAIL } from './actions';
import { FETCH_USERS_SUCCESS } from '../users/actions';

const initialState = {
  tables: {},
  usersConnections: {},
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
    case FETCH_USERS_SUCCESS:
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
    default:
      return state;
  }
};

export default reducer;
