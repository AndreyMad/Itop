import * as usersActions from "./usersActions";
import * as API from "../../api/api";
import * as authOperations from '../Auth/authOperations'

export const getUsers = (token) => (dispatch) => {
  dispatch(usersActions.getUsersStart(token));
  
  API.getUsers(token)
    .then((res) => {
      if (res.data.status === "ERROR") {
        dispatch(usersActions.getUsersError(res.data.message));
      }
      if (res.data.status === "SUCCES") {
        dispatch(usersActions.getUsersSuccess(res.data.users));
      }
    })
    .catch((err) => {
      dispatch(usersActions.getUsersError(err));
    });
};

export const updateUser = (user,token) => (dispatch) => {
  dispatch(usersActions.updateUserStart());

  API.updateUser(user, token)
    .then((res) => {
 
      if (res.data.status === "ERROR") {
        dispatch(usersActions.updateUserError(res.data.message));
      }
      if (res.data.status === "SUCCES") {
        dispatch(usersActions.updateUserSuccess(res.data.user));
      }
    })
    .catch((err) => {
      dispatch(usersActions.updateUserError(err));
    });

};

export const deleteUser = (userId,token) => (dispatch) => {
  dispatch(usersActions.deleteUserStart());

  API.deleteUser(userId, token)
    .then((res) => {

      if (res.data.status === "ERROR") {
        dispatch(usersActions.deleteUserError(res.data.message));
      }
       if(!!res.data.sameUser){
          dispatch(authOperations.logout());
        }
      if (res.data.status === "SUCCES") {
        dispatch(usersActions.deleteUserSuccess(res.data.email));
      }
    })
    .catch((err) => {
      dispatch(usersActions.deleteUserError(err));
    });

};
