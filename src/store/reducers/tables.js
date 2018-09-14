import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tables: null,
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
    default:
      return state;
  }
};

export default reducer;
