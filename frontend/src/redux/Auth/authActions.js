import types from "../Types";

export const registerStart = () => ({
  type: types.REGISTRATION_START,
});

export const registerSuccess = (data) => ({
  type: types.REGISTRATION_SUCCESS,
  payload: {
    data,
  },
});
export const registerError = (error) => ({
  type: types.REGISTRATION_ERROR,
  payload: {
    error,
  },
});

export const loginStart = () => ({
  type: types.LOGIN_START,
});
export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    data,
  },
});
export const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  payload: {
    error,
  },
});

export const logoutStart = () => ({
  type: types.LOGOUT_START,
});
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
export const logoutError = (error) => ({
  type: types.LOGOUT_ERROR,
  payload: {
    error,
  },
});

export const refreshStart = () => ({
  type: types.REFRESH_START,
});
export const refreshSuccess = data => ({
  type: types.REFRESH_SUCCESS,
  payload: {
    data,
  },
});
export const refreshError = error => ({
  type: types.REFRESH_ERROR,
  payload: {
    error,
  },
});


