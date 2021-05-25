import * as profilesActions from "./profilesActions";
import * as API from "../../api/api";

export const getProfiles = (token) => (dispatch) => {
  dispatch(profilesActions.getProfilesStart());
  
  API.getProfiles(token)
    .then((res) => {
      if (res.data.status === "ERROR") {
        dispatch(profilesActions.getProfilesError(res.data.message));
      }
      if (res.data.status === "SUCCES") {
        dispatch(profilesActions.getProfilesSuccess(res.data.profiles));
      }
    })
    .catch((err) => {
      dispatch(profilesActions.getProfilesError(err));
    });
};

export const createProfile = (profile, token, creatorId) => (dispatch) => {
  dispatch(profilesActions.createProfileStart());

 return  API.createProfile(profile, token, creatorId)
    .then((res) => {
      if (res.data.status === "ERROR") {
        dispatch(profilesActions.createProfileError(res.data.message));
        return res.data.status

      }
      if (res.data.status === "SUCCES") {
        dispatch(profilesActions.createProfileSuccess(res.data.profile));
        return res.data.status
      }
    })
    .catch((err) => {
      dispatch(profilesActions.createProfileError(err));
    });
};

export const updateProfile = (profile,token) => (dispatch) => {
  dispatch(profilesActions.updateProfileStart());

 return  API.updateProfile(profile, token)
    .then((res) => {
      if (res.data.status === "ERROR") {
        dispatch(profilesActions.updateProfileError(res.data.message));
        return res.data.status

      }
      if (res.data.status === "SUCCES") {
        dispatch(profilesActions.updateProfileSuccess(res.data.profile));
        return res.data.status
      }
    })
    .catch((err) => {
      dispatch(profilesActions.updateProfileError(err));
    });
};

export const deleteProfile = (profile, token) => (dispatch) => {
  dispatch(profilesActions.deleteProfileStart());

 return  API.deleteProfile(profile, token)
    .then((res) => {
     
      if (res.data.status === "ERROR") {
        dispatch(profilesActions.deleteProfileError(res.data.message));
        return res.data.status

      }
      if (res.data.status === "SUCCES") {
        dispatch(profilesActions.deleteProfileSuccess(res.data.id));
        return res.data.status
      }
    })
    .catch((err) => {
      dispatch(profilesActions.deleteProfileError(err));
    });
};