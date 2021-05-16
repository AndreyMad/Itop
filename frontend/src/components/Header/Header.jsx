import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Header.module.css";
import userLogo from "../../assets/img/user.png";
import adminLogo from "../../assets/img/admin.png";
import { connect } from 'react-redux'
import * as authOperations from '../../redux/Auth/authOperations'
import * as authSelectors from '../../redux/Auth/authSelectors'


const Header = ({ isAuth, user,logout,  }) => {
  console.log(user);
  return isAuth ? (
    <header className={style.container}>
      <div className={style.wrapper}>
        <img alt="user logo" src={user.isadmin? adminLogo : userLogo}></img>
        <span>{user.username}</span>
      </div>
      <NavBar></NavBar>
      <button className={style.logoutBtn} onClick={logout}>Log out</button>
    </header>
  ) : null;
};

const mDTP = dispatch => ({
  logout: token => dispatch(authOperations.logout(token))
 
});
const mSTP = store => ({
  isAuth: authSelectors.getIsAuth(store),
  user: authSelectors.getUser(store)
});
export default connect(mSTP, mDTP)(Header);

