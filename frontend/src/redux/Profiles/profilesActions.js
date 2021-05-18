import types from "../Types";

export const getProfilesStart = (token) => ({
  type: types.GET_PROFILES_START,
  payload: { token },
});
export const getProfilesSuccess = (profiles) => ({
  type: types.GET_PROFILES_SUCCESS,
  payload: {
    profiles,
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


export const createProfileStart = () => ({
  type: types.CREATE_PROFILE_START,
});
export const createProfileSuccess = (data) => ({
  type: types.CREATE_PROFILE_SUCCESS,
  payload: {
    profile: { ...data },
  },
});
export const createProfileError = (error) => ({
  type: types.CREATE_PROFILE_ERROR,
  payload: {
    error,
  },
});


export const updateProfileStart = () => ({
  type: types.UPDATE_PROFILE_START,
});
export const updateProfileSuccess = (data) => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  payload: {
    profile: { ...data },
  },
});
export const updateProfileError = (error) => ({
  type: types.UPDATE_PROFILE_ERROR,
  payload: {
    error,
  },
});


export const deleteProfileStart = () => ({
  type: types.DELETE_PROFILE_START,
});
export const deleteProfileSuccess = (id) => ({
  type: types.DELETE_PROFILE_SUCCESS,
  payload: { id },
});
export const deleteProfileError = (error) => ({
  type: types.DELETE_PROFILE_ERROR,
  payload: {
    error,
  },
});
