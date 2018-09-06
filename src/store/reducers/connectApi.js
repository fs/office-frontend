import { CREATE_TABLE, CREATE_TABLE_SUCCESS, CREATE_TABLE_FAILURE } from '../actions/actions';

const initialState = {
  isLoading: false,
  loaded: false,
  tables: [],
  error: false,
  errorText: '',
};

export default (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case CREATE_TABLE:
      return {
        ...state,
        isLoading: true,
        loaded: false,
      };

    case CREATE_TABLE_SUCCESS:
      return {
        ...state,
        tables: payload,
        isLoading: false,
        loaded: true,
        error: null,
      };

    case CREATE_TABLE_FAILURE:
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
