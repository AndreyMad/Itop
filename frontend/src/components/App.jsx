import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "./App.module.css";

import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import routes from "../routes/routes";
import Header from "./Header/Header";
import * as authSelectors from '../redux/Auth/authSelectors';
import Loader from '../components/Loader/Loader'
import * as authOperations from '../redux/Auth/authOperations'


class App extends Component {
  componentDidMount() {
    const { refresh } = this.props;
    refresh();
  }
componentDidUpdate(prevProps ){
if(prevProps.error!==this.props.error){
  if(this.props.error){
    NotificationManager.warning(`${this.props.error}`,'',1000)}
  }
}
  render() {
    const {isLoading, error}=this.props
    return (
      <>
      {isLoading?<Loader />:null}
      <NotificationContainer></NotificationContainer>
        <Header  />
        <Switch>
          <Route
            exact
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
          <ProtectedRoute
            path={routes.PROFILES_PAGE.path}
            component={routes.PROFILES_PAGE.component}
          />
          <ProtectedRoute
            path={routes.DASHBOARD_PAGE.path}
            component={routes.DASHBOARD_PAGE.component}
          />
          <ProtectedRoute
            path={routes.USERS_PAGE.path}
            component={routes.USERS_PAGE.component}
          />
          <Route
            to={routes.ERROR_PAGE.path}
            component={routes.ERROR_PAGE.component}
          />
          <Redirect to={routes.MAIN_PAGE.path} />
        </Switch>
      </>
    );
  }
}
const mSTP = store => ({
  isLoading: authSelectors.getIsLoading(store),
  error: authSelectors.getError(store)
});

const mDTP = dispatch => ({
  refresh: () => dispatch(authOperations.refresh()),
});

export default connect(mSTP, mDTP)(App);