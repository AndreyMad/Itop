import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Header.module.css";
import userLogo from "../../assets/img/user.png";
import adminLogo from "../../assets/img/admin.png";
const Header = ({ isAuth, user }) => {
  const { isAdmin, name } = user;
  return isAuth ? (
    <header className={style.container}>
      <div className={style.wrapper}>
        <img alt="user logo" src={isAdmin ? adminLogo : userLogo}></img>
        <span>{name}</span>
      </div>
      <NavBar></NavBar>
      <button className={style.logoutBtn}>Log out</button>
    </header>
  ) : null;
};

export default Header;
