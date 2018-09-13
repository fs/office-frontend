import * as actionTypes from '../actions/actionTypes';

// user: {
//   userId: 'AS89DFGOHAOA',
//   email: 'gornyyvladimir@gmail.com',
//   name: 'Vladimir Gornyy',
//   photoUrl: 'http://photo.jpg',
// }

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        ...state.user,
        user: action.payload.user,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
      };
    case actionTypes.LOGOUT_FAIL:
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
