import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  SET_TABLE_START,
  SET_TABLE_SUCCESS,
  SET_TABLE_FAIL,
} from './actions';

const initialState = {
  users: {},
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        error: null,
        loading: false,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case SET_TABLE_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SET_TABLE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case SET_TABLE_FAIL:
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
