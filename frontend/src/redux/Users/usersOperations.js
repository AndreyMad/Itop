import * as usersActions from "./usersActions";
import * as API from "../../api/api";

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
