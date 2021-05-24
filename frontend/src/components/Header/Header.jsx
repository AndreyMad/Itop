import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Header.module.css";
import userLogo from "../../assets/img/user.png";
import adminLogo from "../../assets/img/admin.png";
import { connect } from 'react-redux'
import * as authOperations from '../../redux/Auth/authOperations'
import * as Selectors from '../../redux/Selectors'


const Header = ({ isAuth, user,logout,  }) => {
  return isAuth ? (
    <header className={style.container}>
      <div className={style.wrapper}>
        <img alt="user logo" src={user.isAdmin? adminLogo : userLogo}></img>
        <span>{user.name}</span>
      </div>
     {user.isAdmin?<NavBar></NavBar>:null } 
      <button className={style.logoutBtn} onClick={logout}>Log out</button>
    </header>
  ) : null;
};

const mDTP = dispatch => ({
  logout: token => dispatch(authOperations.logout(token))
 
});
const mSTP = store => ({
  isAuth: Selectors.getIsAuth(store),
  user: Selectors.getUser(store)
});
export default connect(mSTP, mDTP)(Header);

