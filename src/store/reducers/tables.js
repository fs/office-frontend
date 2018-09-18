import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tables: {},
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TABLES_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.FETCH_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.tables,
        error: null,
        loading: false,
      };
    case actionTypes.FETCH_TABLES_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case actionTypes.SET_STATUS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.SET_STATUS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actionTypes.SET_STATUS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case actionTypes.DELETE_USER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actionTypes.DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
