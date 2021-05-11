import { NavLink } from "react-router-dom";
import React from "react";
import style from "./NavBar.module.css";
import routes from "../../routes/routes";
import profilesSvg from '../../assets/svg/profile.svg'
import dashboardSvg from '../../assets/svg/dashboard.svg'
import usersSvg from '../../assets/svg/users.svg'
const NavBar = () => {
  return (
    <ul className={style.list}>
      
      <li className={style.item}>
        <NavLink className={style.navLink} to={routes.PROFILES_PAGE.path}>Profiles</NavLink>
        <img alt='presentation' className={style.svg} src={profilesSvg}></img>
      </li>
      <li className={style.item}>
        <NavLink className={style.navLink} to={routes.DASHBOARD_PAGE.path}>Dashboard</NavLink>
        <img alt='presentation' className={style.svg} src={dashboardSvg}></img>

      </li>
      <li className={style.item}>
        <NavLink className={style.navLink} to={routes.USERS_PAGE.path}>Users</NavLink>
        <img alt='presentation' className={style.svg} src={usersSvg}></img>

      </li>
    </ul>
  );
};

export default NavBar;
