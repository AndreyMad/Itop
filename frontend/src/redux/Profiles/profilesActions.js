import types from "./profilesTypes";

export const getProfilesStart = (token) => ({
  type: types.GET_PROFILES_START,
  payload:{token}
});
export const getProfilesSuccess = (users) => ({
  type: types.GET_PROFILES_SUCCESS,
  payload: {
    users,
  },
});
export const getProfilesError = (error) => ({
  type: types.GET_PROFILES_ERROR,
  payload: {
    error,
  },
});
export const resetProfilesStore = () => ({
  type: types.RESET_PROFILES_STORE,
});