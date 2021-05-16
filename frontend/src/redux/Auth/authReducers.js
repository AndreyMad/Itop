import { combineReducers } from 'redux';
import types from './authTypes';

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
    case types.REFRESH_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.REGISTRATION_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.REFRESH_START:
      return true;

    case types.REGISTRATION_ERROR:
    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_ERROR:
    case types.REFRESH_SUCCESS:
    case types.REFRESH_ERROR:
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

export default combineReducers({
  user,
  token,
  error,
  isLoading,
  isAuth,
});
