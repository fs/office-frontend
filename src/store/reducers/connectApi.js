import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  loaded: false,
  tables: [],
  error: false,
  errorText: '',
};

export default (state = initialState, action) => {
  const payload = action.payload;
  console.log(action.type);
  switch (action.type) {
    case actionTypes.CREATE_TABLE:
      return {
        ...state,
      };

    case actionTypes.CREATE_TABLE_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case actionTypes.CREATE_TABLE_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case actionTypes.DELETE_TABLE:
      return {
        ...state,
      };

    case actionTypes.DELETE_TABLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: false,
        error: null,
      };

    case actionTypes.DELETE_TABLE_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case actionTypes.FETCH_TABLES:
      return {
        ...state,
        isLoading: true,
        loaded: false,
      };

    case actionTypes.FETCH_TABLES_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        tables: action.payload.tables,
        isLoading: false,
        loaded: true,
        error: null,
      };

    case actionTypes.FETCH_TABLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        error: payload,
      };
    default:
      return state;
  }
};
