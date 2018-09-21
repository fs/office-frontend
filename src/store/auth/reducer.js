import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './actions';

import { RESET_ERROR } from '../error/actions';

const initialState = {
  user: {},
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        loading: false,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case LOGOUT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
