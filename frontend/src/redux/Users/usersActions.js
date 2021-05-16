import types from "./usersTypes";

export const getUsersStart = (token) => ({
  type: types.GET_USERS_START,
  payload:{token}
});
export const getUsersSuccess = (users) => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    users,
  },
});
export const getUsersError = (error) => ({
  type: types.GET_USERS_ERROR,
  payload: {
    error,
  },
});
export const resetUsersStore = () => ({
  type: types.RESET_USERS_STORE,
});