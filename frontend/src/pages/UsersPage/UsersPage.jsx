import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Selectors from "../../redux/Selectors";
import * as usersOperations from "../../redux/Users/usersOperations";
import * as profilesOperations from "../../redux/Profiles/profilesOperations";
import style from "./UsersPage.module.css";

class UsersPage extends Component {
  componentDidMount() {
    const { getProfiles, token, getUsers } = this.props;
    if (token) {
      getProfiles(token);
      getUsers(token);
    }
  }

  render() {
    const { users, logedUser, profiles } = this.props;
    return (
      <section className={style.container}>
        <h1>{users.length >= 1 ? "User:" : "Users:"}</h1>
        <ul className={style.cardContainer}>
          {users.map((user) => {
              const userProfiles = profiles?.filter(
              (el) => {
               return el.userId === user.id}
            );
            const { match, location } = this.props;

            return (
              <li key={user.id} className={style.cardWrapper}>
                <p>{logedUser.name}</p>
                <p>{user.email}</p>
                <NavLink
                  className={style.navLink}
                  to={{
                    pathname: `${match.url}/${user.id}`,
                    state: { from: { ...location } },
                  }}
                >
                  <p>{userProfiles?.length || 0} profiles</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
const mDTP = (dispatch) => ({
  getProfiles: (token) => dispatch(profilesOperations.getProfiles(token)),
  getUsers: (token) => dispatch(usersOperations.getUsers(token)),
});
const mSTP = (store) => ({
  token: Selectors.getToken(store),
  logedUser: Selectors.getUser(store),
  users: Selectors.getUsers(store),
  profiles: Selectors.getProfiles(store),
});
export default connect(mSTP, mDTP)(UsersPage);
