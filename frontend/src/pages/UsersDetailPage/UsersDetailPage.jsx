import React, { Component } from "react";
import { connect } from "react-redux";
import * as Selectors from "../../redux/Selectors";
import * as usersOperations from "../../redux/Users/usersOperations";
import * as profilesOperations from "../../redux/Profiles/profilesOperations";
import * as authOperations from "../../redux/Auth/authOperations";
import style from "./UsersDetailPage.module.css";
import editSvg from "../../assets/svg/edit.svg";
import thrashSvg from "../../assets/svg/thrash.svg";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Modal from "../../components/Modal/Modal";
import UserEditModal from "../../components/UserEditModal/UserEditModal";
import SubmitModal from "../../components/SubmitModal/SubmitModal";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

class UsersDetailPage extends Component {
  state = {
    isModalOpen: false,
    profileToEdit: {},
    userPageShowwed: {},
    isUserEditModal: false,
    isSudmitShown: false,
  };

  componentWillMount() {
    const { match, users } = this.props;

    this.setState({
      userPageShowwed: users.find((user) => user.id === match.params.id),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users !== prevProps.users) {
      const { match, users } = this.props;

      this.setState({
        userPageShowwed: users.find((user) => user.id === match.params.id),
      });
    }
  }

  closeModal = (e) => {
    window.removeEventListener("keydown", this.closeModal);
    if (
      e?.code === "Escape" ||
      e.target.id === "overlay" ||
      e.target.id === "closeBtn" ||
      e.target.name === "closeimg"
    ) {
      this.setState({ isModalOpen: false });
    }
  };

  showModal = (profile) => {
    window.addEventListener("keydown", this.closeModal);
    this.setState({ isModalOpen: true, profileToEdit: { ...profile } });
  };

  createProfileHandler = (profile) => {
    const { createProfile, token } = this.props;
    const { userPageShowwed } = this.state;
    createProfile(profile, token, userPageShowwed.id);
    this.setState({ isModalOpen: false });
  };

  updateProfileHandler = (profile) => {
    const { updateProfile, token } = this.props;

    updateProfile(profile, token);
    this.setState({ isModalOpen: false });
  };

  deleteHandler = (id) => {
    const { deleteProfile, token } = this.props;
    deleteProfile(id, token);
  };

  updateUserHandler = (user) => {
    const { updateUser, token } = this.props;
    updateUser(user, token);
    this.setState({
      isUserEditModal: false,
    });
  };

  closeUserEditModal = (e) => {
    window.removeEventListener("keydown", this.closeModal);
    if (
      e?.code === "Escape" ||
      e.target.id === "overlay" ||
      e.target.id === "closebtn" ||
      e.target.name === "closeimg"
    ) {
      this.setState({ isUserEditModal: false });
    }
  };

  showUserEditModal = ({ target }) => {
    window.addEventListener("keydown", this.closeUserEditModal);
    this.setState({
      isUserEditModal: true,
    });
  };

  deleteUser = () => {
    const { deleteUser, token } = this.props;
    const { userPageShowwed } = this.state;
    deleteUser(userPageShowwed.id, token);
  };

  deleteUserSubmit = () => {
    this.setState({
      isSudmitShown: true,
    });
  };
  closeSubmitModal = () => {
    this.setState({
      isSudmitShown: false,
    });
  };

  render() {
    const { profiles } = this.props;
    const {
      isModalOpen,
      isSudmitShown,
      profileToEdit,
      userPageShowwed,
      isUserEditModal,
    } = this.state;
    return (
      <>
        {userPageShowwed ? (
          <>
            {isSudmitShown ? (
              <SubmitModal
                submit={this.deleteUser}
                cancel={this.closeSubmitModal}
              />
            ) : null}
            {isModalOpen ?? isUserEditModal ? (
              <Modal
                updateProfileHandler={this.updateProfileHandler}
                profileToEdit={profileToEdit}
                createProfileHandler={this.createProfileHandler}
                closeModal={this.closeModal}
                type="add profile"
              />
            ) : null}
            {isUserEditModal ? (
              <UserEditModal
                closeUserEditModal={this.closeUserEditModal}
                updateUserHandler={this.updateUserHandler}
                user={userPageShowwed}
              />
            ) : null}
            <section className={style.container}>
              <div className={style.userContainer}>
                <h2>{userPageShowwed.username}</h2>
                <h3>{userPageShowwed.email}</h3>
                <span>{userPageShowwed.isadmin ? "Admin" : "User"}</span>
                <div className={style.svgWrapper}>
                  <button
                    className={style.editBtn}
                    id="user edit"
                    onClick={this.showUserEditModal}
                  >
                    <img
                      alt="edit button"
                      className={style.svgBtn}
                      src={editSvg}
                    ></img>
                  </button>
                  <button
                    className={style.editBtn}
                    id="user delete"
                    onClick={this.deleteUserSubmit}
                  >
                    <img
                      alt="delete button"
                      className={style.svgBtn}
                      src={thrashSvg}
                    ></img>
                  </button>
                </div>
              </div>
              <div className={style.cardContainer}>
                {profiles.map((profile) => {
                  if (profile.userId === userPageShowwed?.id) {
                    return (
                      <ProfileCard
                        deleteHandler={this.deleteHandler}
                        key={profile.id}
                        showModal={this.showModal}
                        className={style.cardWrapper}
                        profile={profile}
                      ></ProfileCard>
                    );
                  }
                })}
                <div className={style.addWrapper}>
                  <button
                    onClick={this.showModal}
                    className={style.addBtn}
                  ></button>
                  <span>Create new profile</span>
                </div>
              </div>
            </section>
          </>
        ) : (
          <NavLink className={style.userPageLink} to={routes.USERS_PAGE.path} >Back to users</NavLink>
        )}
      </>
    );
  }
}

const mDTP = (dispatch) => ({
  updateProfile: (profile, token) =>
    dispatch(profilesOperations.updateProfile(profile, token)),
  updateUser: (user, token) =>
    dispatch(usersOperations.updateUser(user, token)),
  deleteProfile: (profile, token) =>
    dispatch(profilesOperations.deleteProfile(profile, token)),
  createProfile: (profile, token, user) =>
    dispatch(profilesOperations.createProfile(profile, token, user)),
  deleteUser: (userId, token) =>
    dispatch(usersOperations.deleteUser(userId, token)),
  logout: (token) => dispatch(authOperations.logout(token)),
});

const mSTP = (store) => ({
  token: Selectors.getToken(store),
  logedUser: Selectors.getUser(store),
  profiles: Selectors.getProfiles(store),
  users: Selectors.getUsers(store),
});

export default connect(mSTP, mDTP)(UsersDetailPage);
