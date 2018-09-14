// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   isLoading: false,
//   loaded: false,
//   updateTables: false,
//   tables: [],
//   error: false,
//   errorText: '',
// };

// export default (state = initialState, action) => {
//   const payload = action.payload;

//   switch (action.type) {
//     case actionTypes.CREATE_TABLE:
//       return {
//         ...state,
//         updateTables: false,
//       };

//     case actionTypes.CREATE_TABLE_SUCCESS:
//       return {
//         ...state,
//         updateTables: true,
//         error: null,
//       };

//     case actionTypes.CREATE_TABLE_FAILURE:
//       return {
//         ...state,
//         error: payload,
//       };

//     case actionTypes.DELETE_TABLE:
//       return {
//         ...state,
//         updateTables: false,
//       };

//     case actionTypes.DELETE_TABLE_SUCCESS:
//       return {
//         ...state,
//         updateTables: true,
//         error: null,
//       };

//     case actionTypes.DELETE_TABLE_FAILURE:
//       return {
//         ...state,
//         error: payload,
//       };

//     case actionTypes.FETCH_TABLES:
//       return {
//         ...state,
//         updateTables: false,
//         isLoading: true,
//         loaded: false,
//       };

//     case actionTypes.FETCH_TABLES_SUCCESS:
//       return {
//         ...state,
//         tables: action.payload.tables,
//         isLoading: false,
//         loaded: true,
//         error: null,
//       };

//     case actionTypes.FETCH_TABLES_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         loaded: true,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };
