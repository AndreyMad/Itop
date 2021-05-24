import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "./App.module.css";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import routes from "../routes/routes";
import Header from "./Header/Header";
import * as Selectors from "../redux/Selectors";
import Loader from "../components/Loader/Loader";
import * as authOperations from "../redux/Auth/authOperations";

class App extends Component {
  componentDidMount() {
    const { refresh } = this.props;
    refresh();
  }
  componentDidUpdate(prevProps) {
      if (prevProps.notifications !== this.props.notifications) {
        const { notifications } = this.props;
        if(!!notifications){
          switch(notifications.type){
          case 'warning':
            return NotificationManager.warning(`${notifications.message}`,'',2000)
          case 'success':
              return NotificationManager.success(`${notifications.message}`,'',2000)
          case 'error':
            return NotificationManager.error(`${notifications.message}`,'',2000)
          
          default: return null
          }
     
        }
   
      
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <>
        {isLoading ? <Loader /> : null}
        <NotificationContainer></NotificationContainer>
        <Header />
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
            exact
            path={routes.USERS_PAGE.path}
            component={routes.USERS_PAGE.component}
          />
          <ProtectedRoute
            exact
            path={routes.USERS_DETAIL_PAGE.path}
            component={routes.USERS_DETAIL_PAGE.component}
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
const mSTP = (store) => ({
  isLoading: Selectors.getIsLoading(store),
  error: Selectors.getError(store),
  notifications: Selectors.getNotification(store),
  
});

const mDTP = (dispatch) => ({
  refresh: () => dispatch(authOperations.refresh()),


});

export default connect(mSTP, mDTP)(App);
