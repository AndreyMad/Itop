/* eslint-disable import/no-cycle */
import UsersPage from "../pages/UsersPage/UsersPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import ProfilesPage from "../pages/ProfilesPage/ProfilesPage";
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import MainPage from '../pages/MainPage/MainPage'
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  MAIN_PAGE: {
    path: "/",
    component: MainPage
  },
  PROFILES_PAGE:{
    path: "/profiles",
    component: ProfilesPage
  },
  DASHBOARD_PAGE: {
    path: "/dashboard",
    component: DashboardPage
  },
  USERS_PAGE:{
    path: "/users",
    component: UsersPage
  },
  ERROR_PAGE: {
    path: `/error`,
    component: ErrorPage
  }
};
