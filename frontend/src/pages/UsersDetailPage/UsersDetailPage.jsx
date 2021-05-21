import React, { Component } from "react";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import * as Selectors from "../../redux/Selectors";
import * as usersOperations from "../../redux/Users/usersOperations";
import * as profilesOperations from "../../redux/Profiles/profilesOperations";
import style from "./UsersDetailPage.module.css";
import editSvg from "../../assets/svg/edit.svg";
import thrashSvg from "../../assets/svg/thrash.svg";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Modal from "../../components/Modal/Modal";
import UserEditModal from '../../components/UserEditModal/UserEditModal'
class UsersDetailPage extends Component {
  state = {
    isModalOpen: false,
    profileToEdit: {},
    userPageShowwed: {},
    isUserEditModal:false
  };
  componentWillMount() {
    const { match, users } = this.props;

    this.setState({
      userPageShowwed: users.find((user) => user.id === match.params.id),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.profiles !== prevProps.profiles) {
      const { userPageShowwed } = this.state;
    
     
    }
  }

  closeModal = (e) => {
    window.removeEventListener("keydown", this.closeModal);
    if (
      e?.code === "Escape" ||
      e.target.id === "overlay" ||
      e.target.id === "closeBtn"
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
    const {userPageShowwed}=this.state
    createProfile(profile, token, userPageShowwed.email)
    this.setState({ isModalOpen: false });

  };

  updateProfileHandler = (profile) => {
    const { updateProfile, token } = this.props;
    updateProfile(profile, token)
      this.setState({ isModalOpen: false });
  };

  deleteHandler = (id) => {
    const { deleteProfile, token } = this.props;
    deleteProfile(id, token)
  };
 
  btnHandler = ({target})=>{
    console.log('%cUsersDetailPage.jsx line:74 target.id', 'color: #007acc;', target.parentElement.id==='user edit');
    if(target.parentElement.id==='user edit'){
      console.log('%cUsersDetailPage.jsx line:76', 'color: #007acc;', 'afasfdsaf');
     this.setState({
        isUserEditModal:true
      }) 
    }
  }
  closeUserEditModal=()=>{
    this.setState({
      isUserEditModal:false
    }) 
  }
  render() {
    const { profiles } = this.props;
    const { isModalOpen, profileToEdit, userPageShowwed,isUserEditModal } = this.state;
    return (
      <>
        {isModalOpen ? (
          <Modal
            updateProfileHandler={this.updateProfileHandler}
            profileToEdit={profileToEdit}
            createProfileHandler={this.createProfileHandler}
            closeModal={this.closeUserEditModal}
            type="add profile"
          />
        ) : null}
        {isUserEditModal? <UserEditModal/>:null}
        <section className={style.container}>
          <div className={style.userContainer}>
            <h2>{userPageShowwed.username}</h2>
            <h3>{userPageShowwed.email}</h3>
            <span>{userPageShowwed.isadmin ? "Admin" : "User"}</span>
            <div className={style.svgWrapper}>
             <button className={style.editBtn} id='user edit' onClick={this.btnHandler}>
             <img
                alt="edit button"
                className={style.svgBtn}
                src={editSvg}
              ></img>
               </button > 
               <button className={style.editBtn} id='user delete' onClick={this.btnHandler}>
              <img
                alt="delete button"
                className={style.svgBtn}
                src={thrashSvg}
              ></img></button>
            </div>
          </div>
          <div className={style.cardContainer}>
            {profiles.map((profile) => {
          if(profile.useremail === userPageShowwed?.email){
            return (
                <ProfileCard
                  deleteHandler={this.deleteHandler}
                  key={profile.id}
                  showModal={this.showModal}
                  className={style.cardWrapper}
                  profile={profile}
                ></ProfileCard>
              );}
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
  updateProfile: (profile, token) =>
    dispatch(profilesOperations.updateProfile(profile, token)),
  updateUser: (token) => dispatch(usersOperations.updateUser(token)),
  deleteProfile: (profile, token) =>
    dispatch(profilesOperations.deleteProfile(profile, token)),
  createProfile:(profile, token,user )=>dispatch(profilesOperations.createProfile(profile, token,user)),
});

const mSTP = (store) => ({
  token: Selectors.getToken(store),
  logedUser: Selectors.getUser(store),
  profiles: Selectors.getProfiles(store),
  users: Selectors.getUsers(store),
});

export default connect(mSTP, mDTP)(UsersDetailPage);

// const mDTP = (dispatch) => ({
//   getProfiles: (token) => dispatch(profilesOperations.getProfiles(token)),
//   createProfile: (profile, token) =>
//     dispatch(profilesOperations.createProfile(profile, token)),
//   updateProfile: (profile, token) =>
//     dispatch(profilesOperations.updateProfile(profile, token)),
//   deleteProfile: (profile, token) =>
//     dispatch(profilesOperations.deleteProfile(profile, token)),
// });
// const mSTP = (store) => ({
//   token: Selectors.getToken(store),
//   profiles: Selectors.getProfiles(store),
//   users: Selectors.getUsers(store),
// });
// export default connect(mSTP, mDTP)(ProfilesPage);
