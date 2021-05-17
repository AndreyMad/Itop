import { combineReducers } from "redux";
import types from "./profilesTypes";
// eslint-disable-next-line no-unused-vars
const initialState = [];

const profilesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROFILES_START:
      return initialState;
    case types.GET_PROFILES_SUCCESS:
      return payload.profiles;
    case types.GET_PROFILES_ERROR:
      return state;
    case types.RESET_PROFILES_STORE:
      return initialState;

    default:
      return initialState;
  }
};

// case types.DELETE_CONTACT:
//   return state.filter(el => el.id !== action.payload.id);

export default profilesReducer;

// const appReducer = combineReducers({
//   usersReducer,authReducer
// })

// const rootReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     state = undefined
//   }

//   return appReducer(state, action)
// }
