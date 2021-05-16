import { combineReducers } from "redux";
import types from "./usersTypes";
// eslint-disable-next-line no-unused-vars
const initialState = [];

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USERS_START:
      return initialState;
    case types.GET_USERS_SUCCESS:
      return payload.users;
    case types.GET_USERS_ERROR:
      return state;
    case types.RESET_USERS_STORE:
      return initialState;

    default:
      return initialState;
  }
};

// case types.DELETE_CONTACT:
//   return state.filter(el => el.id !== action.payload.id);

export default usersReducer;

// const appReducer = combineReducers({
//   usersReducer,authReducer
// })

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined
//   }

//   return appReducer(state, action)
// }
