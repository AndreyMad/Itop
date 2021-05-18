import React, { Component } from "react";
import { connect } from "react-redux";
import * as profilesOperations from "../../redux/Profiles/profilesOperations";
import * as Selectors from "../../redux/Selectors";
import style from "./ProfilesPage.module.css";
import Modal from "../../components/Modal/Modal";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
class ProfilesPage extends Component {
  state = {
    isModalOpen: false,
    profileToEdit:{}
  };

  componentDidMount() {
    const { getProfiles, token, profiles } = this.props;
    getProfiles(token);
  }

  closeModal = (e) => {
    
    window.removeEventListener("keydown", this.closeModal);
    if (
      e?.code === "Escape" ||
      e.target.id==="overlay"||
      e.target.id==="closeBtn"
    ) {
      this.setState({ isModalOpen: false });
    }
  };

  showModal = profile => {
   
    window.addEventListener("keydown", this.closeModal);
    this.setState({ isModalOpen: true, profileToEdit:{...profile} });
  };

  createProfileHandler = (profile) => {
    const { createProfile, token } = this.props;
    createProfile(profile, token).then((res) => {
      if (res === "SUCCES") {
        NotificationManager.success("", "Профиль успешно добавлен", 2000);
        this.setState({ isModalOpen: false });
      }
    });
  };

  updateProfileHandler =(profile) =>{
    const {updateProfile, token}=this.props;
    updateProfile(profile, token).then((res) => {
      console.log(profile);
      if (res === "SUCCES") {
        NotificationManager.success("", "Профиль успешно изменен", 2000);
        this.setState({ isModalOpen: false });
      }
    });
  }
deleteHandler =(id)=>{
  const {deleteProfile, token}=this.props; 
  deleteProfile(id, token).then((res) => {
      
    if (res === "SUCCES") {
      NotificationManager.success("", "Профиль успешно изменен", 2000);
      this.setState({ isModalOpen: false });
    }
  });
}

  render() {
    const { isModalOpen,profileToEdit } = this.state;
    const { profiles } = this.props;
    return (
      <>
        <NotificationContainer></NotificationContainer>
        <section className={style.container}>
          {isModalOpen ? (
            <Modal
              updateProfileHandler={this.updateProfileHandler}
              profileToEdit={profileToEdit}
              createProfileHandler={this.createProfileHandler}
              closeModal={this.closeModal}
              type="add profile"
            />
          ) : null}
          <h2>Profiles:</h2>
          <div className={style.cardContainer}>
            {profiles.map((profile) => {
              return (
                <ProfileCard
                deleteHandler={this.deleteHandler}
                key={profile.id}
                showModal={this.showModal}
                  className={style.cardWrapper}
                  profile={profile}
                ></ProfileCard>
              );
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
    );
  }
}

const mDTP = (dispatch) => ({
  getProfiles: (token) => dispatch(profilesOperations.getProfiles(token)),
  createProfile: (profile, token) =>
  dispatch(profilesOperations.createProfile(profile, token)),
  updateProfile: (profile, token) =>
  dispatch(profilesOperations.updateProfile(profile, token)),
  deleteProfile: (profile, token) =>
  dispatch(profilesOperations.deleteProfile(profile, token)),
});
const mSTP = (store) => ({
  token: Selectors.getToken(store),
  profiles: Selectors.getProfiles(store),
});
export default connect(mSTP, mDTP)(ProfilesPage);
