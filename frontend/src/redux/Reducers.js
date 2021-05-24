import { combineReducers } from "redux";
import types from "./Types";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.REFRESH_SUCCESS:
      return payload.data.user;

    case types.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
      return payload.data.token;

    case types.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
    case types.REFRESH_SUCCESS:
      return null;

    case types.REGISTRATION_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.REGISTRATION_START:
    case types.UPDATE_USER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.REFRESH_START:
    case types.CREATE_PROFILE_START:
    case types.GET_PROFILES_START:
    case types.GET_USERS_START:
    case types.UPDATE_PROFILE_START:
    case types.DELETE_PROFILE_START:
      return true;

    case types.REGISTRATION_ERROR:
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_ERROR:
    case types.REFRESH_SUCCESS:
    case types.REFRESH_ERROR:
    case types.UPDATE_PROFILE_SUCCESS:
    case types.UPDATE_PROFILE_ERROR:
    case types.GET_USERS_ERROR:
    case types.GET_USERS_SUCCESS:
    case types.GET_PROFILES_ERROR:
    case types.GET_PROFILES_SUCCESS:
    case types.CREATE_PROFILE_SUCCESS:
    case types.CREATE_PROFILE_ERROR:
    case types.DELETE_PROFILE_ERROR:
    case types.DELETE_PROFILE_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
    case types.UPDATE_USER_ERROR:
      return false;

    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case types.REGISTRATION_START:
    case types.REGISTRATION_ERROR:
    case types.LOGIN_START:
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
    case types.REFRESH_START:
    case types.REFRESH_ERROR:
      return false;

    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.REFRESH_SUCCESS:
      return true;

    default:
      return state;
  }
};

const profilesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_PROFILES_SUCCESS:
      return payload.profiles;

    case types.CREATE_PROFILE_SUCCESS:
      return [...state, payload.profile];

    case types.UPDATE_PROFILE_SUCCESS:
      return [
        ...state.map((profile) => {
          if (profile.id === payload.profile.id) {
            return { ...payload.profile };
          }
          return profile;
        }),
      ];

    case types.DELETE_PROFILE_SUCCESS:
      return [
        ...state.filter((profile) => {
          return profile.id !== payload.id;
        }),
      ];

    case types.GET_PROFILES_ERROR:
    case types.CREATE_PROFILE_ERROR:
    case types.UPDATE_PROFILE_ERROR:
    case types.DELETE_PROFILE_ERROR:
      return state;

    case types.RESET_PROFILES_STORE:
      return [];

    default:
      return state;
  }
};

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_USERS_SUCCESS:
      return payload.users;

    case types.UPDATE_USER_SUCCESS:
      return [
        ...state.map((user) => {
          if (user.id === payload.user.id) {
            return payload.user;
          }
          return user;
        }),
      ];

    case types.DELETE_USER_SUCCESS:
      return state.filter((user) => user.email !== payload.email);

    case types.GET_USERS_ERROR:
    case types.UPDATE_USER_START:
    case types.UPDATE_USER_ERROR:
      return state;

    case types.RESET_USERS_STORE:
      return [];

    default:
      return state;
  }
};

const notificationReducerInitialState = {
  isVisible: false,
  type: "",
  message: "",
};
const notificationReducer = (
  state = notificationReducerInitialState,
  { type, payload }
) => {
  switch (type) {
    case types.REGISTRATION_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.REFRESH_START:
    case types.CREATE_PROFILE_START:
    case types.GET_PROFILES_START:
    case types.GET_USERS_START:
    case types.UPDATE_PROFILE_START:
    case types.DELETE_PROFILE_START:
    case types.UPDATE_USER_START:
      return state;

    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        isVisible: true,
        type: "success",
        message: `Hello ${payload?.data?.user?.name}!!!`,
      };

    case types.LOGOUT_SUCCESS:
      return { isVisible: true, type: "warning", message: "See you!!!" };

    case types.UPDATE_PROFILE_SUCCESS:
      return { isVisible: true, type: "success", message: "Profile updated" };

    case types.UPDATE_USER_SUCCESS:
      return { isVisible: true, type: "success", message: "User updated" };

    case types.CREATE_PROFILE_SUCCESS:
      return { isVisible: true, type: "success", message: "Profile added" };

    case types.DELETE_PROFILE_SUCCESS:
      return { isVisible: true, type: "success", message: "Profile deleted" };

    case types.DELETE_USER_SUCCESS:
      return { isVisible: true, type: "success", message: "User deleted" };

    case types.REGISTRATION_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
    case types.REFRESH_ERROR:
    case types.UPDATE_PROFILE_ERROR:
    case types.GET_USERS_ERROR:
    case types.GET_PROFILES_ERROR:
    case types.CREATE_PROFILE_ERROR:
    case types.DELETE_PROFILE_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        status: "error",
        type: "error",
        message: payload.error || "NO MESSAGE",
      };

    default:
      return null;
  }
};
export default combineReducers({
  user,
  token,
  error,
  isLoading,
  isAuth,
  profiles: profilesReducer,
  users: usersReducer,
  notification: notificationReducer,
});
