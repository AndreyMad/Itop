import * as authActions from "./authActions";
import * as API from "../../api/api";
import * as usersActions from '../Users/usersActions'
import * as profilesActions from '../Profiles/profilesActions'

export const register = (user) => (dispatch) => {
  dispatch(authActions.registerStart());

  API.createUser(user)
    .then((res) => {
      if (res.data.status === "ERROR") {
        dispatch(authActions.registerError(res.data.message));
      }
      if (res.data.status === "SUCCES") {
        dispatch(authActions.registerSuccess(res.data));
      }
    })
    .catch((err) => {
      dispatch(authActions.registerError(err));
    });
};

export const login = (user) => (dispatch) => {
  dispatch(authActions.loginStart());

  API.itopAuthorization(user)
    .then((res) => {  
      if (res.data.status === "ERROR") {
        console.log(res.data.message)
        dispatch(authActions.loginError(res.data.message));
      }
      if (res.data.status === "SUCCES") {
        dispatch(authActions.loginSuccess(res.data));

      }
    })
    // .catch((err) => console.log('%cauthOperations.js line:36 err', 'color: #007acc;', err));
};

export const logout = () => (dispatch, getStore) => {
  dispatch(authActions.logoutStart());
  const store = getStore();
  const { token } = store;
  API.itopLogout(token)
    .then((res) => {
      dispatch(authActions.logoutSuccess());
      dispatch(usersActions.resetUsersStore())
      dispatch(profilesActions.resetProfilesStore())
    })
    .catch((err) => {
      dispatch(authActions.logoutError(err))});
};

export const refresh = () => (dispatch, getStore) => {
  const store = getStore();
  const { token } = store;
  if (!token) {
    return;
  }

  dispatch(authActions.refreshStart());
  API.itopCheckSession(token)
    .then((res) => {
     if(res.data.status==="ERROR"){
     return dispatch(authActions.refreshError(res.data.message))
    }
    dispatch(authActions.refreshSuccess(res.data));
    })
    .catch((err) =>dispatch(authActions.refreshError(err))
       );
};
