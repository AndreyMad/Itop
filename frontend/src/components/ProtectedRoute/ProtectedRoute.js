/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/Auth/authSelectors';
import routes from '../../routes/routes';

const ProtectedRoute = ({ component: Component, isAuth, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.MAIN_PAGE.path,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps = store => ({
  isAuth: authSelectors.getIsAuth(store),
});

export default connect(mapStateToProps)(ProtectedRoute);
