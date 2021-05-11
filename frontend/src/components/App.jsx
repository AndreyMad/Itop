import React, { Component } from "react";
import Header from "./Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes/routes";
import "./App.module.css";

export default class App extends Component {
  render() {
    const user = { isAdmin: true, name: "andrey" };
    return (
      <>
        <Header user={user} isAuth />
        <Switch>
          <Route
            exact
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
          <Route
            path={routes.PROFILES_PAGE.path}
            component={routes.PROFILES_PAGE.component}
          />
          <Route
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <Route
            path={routes.USERS_PAGE.path}
            component={routes.USERS_PAGE.component}
          />
          <Route
            to={routes.ERROR_PAGE.path}
            component={routes.ERROR_PAGE.component}
          />
          <Redirect to={routes.ERROR_PAGE.path} />
        </Switch>
      </>
    );
  }
}
