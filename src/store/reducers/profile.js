import * as actionTypes from '../actions/actionTypes';

const initialState = {
  displayName: null,
  photoUrl: null,
  email: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        displayName: action.payload.displayName,
        photoUrl: action.payload.photoUrl,
        loading: false,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case actionTypes.FETCH_USER_PROFILE_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        displayName: action.payload.displayName,
        photoUrl: action.payload.photoUrl,
        email: action.payload.email,
        loading: false,
      };
    case actionTypes.FETCH_USER_PROFILE_FAIL:
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
