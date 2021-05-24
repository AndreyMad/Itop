import types from "../Types";

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


export const updateUserStart = () => ({
  type: types.UPDATE_USER_START,

});
export const updateUserSuccess = (user) => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: {
    user,
  },
});
export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: {
    error,
  },
});

export const deleteUserStart = () => ({
  type: types.DELETE_USER_START,

});
export const deleteUserSuccess = (email, sameUser) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: {
    email,
    sameUser
  },
});
export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: {
    error,
  },
});