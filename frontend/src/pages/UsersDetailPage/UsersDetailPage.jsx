import React, { Component } from "react";
import { connect } from "react-redux";
import * as Selectors from "../../redux/Selectors";
import * as usersOperations from "../../redux/Users/usersOperations";
import * as profilesOperations from "../../redux/Profiles/profilesOperations";
import style from "./UsersDetailPage.module.css";
import editSvg from "../../assets/svg/edit.svg";
import thrashSvg from "../../assets/svg/thrash.svg";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
class UsersDetailPage extends Component {
  render() {
    const { logedUser, profiles, token } = this.props;
    console.log(logedUser);
    console.log(profiles);
    console.log(token);
    return (
      <section className={style.container}>
        <div className={style.userContainer}>
          <h2>{logedUser.name}</h2>
          <h3>{logedUser.email}</h3>
          <span>{logedUser.isAdmin ? "Admin" : "User"}</span>
          <div className={style.svgWrappe}>
            <img className={style.svgBtn} src={editSvg}></img>
            <img className={style.svgBtn} src={thrashSvg}></img>
          </div>
        </div>
        <div className={style.cardContainer}>
          {profiles.map((profile) => {
            return (
              <ProfileCard
                //   deleteHandler={this.deleteHandler}
                key={profile.id}
                showModal={this.showModal}
                className={style.cardWrapper}
                profile={profile}
              ></ProfileCard>
            );
          })}
        </div>
      </section>
    );
  }
}
const mDTP = (dispatch) => ({
  updateProfile: (token) => dispatch(profilesOperations.updateProfile(token)),
  updateUser: (token) => dispatch(usersOperations.updateUser(token)),
});
const mSTP = (store) => ({
  token: Selectors.getToken(store),
  logedUser: Selectors.getUser(store),
  profiles: Selectors.getProfiles(store),
});
export default connect(mSTP, mDTP)(UsersDetailPage);
