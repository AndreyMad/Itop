/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as Selectors from '../../redux/Selectors';
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
  isAuth: Selectors.getIsAuth(store),
});

export default connect(mapStateToProps)(ProtectedRoute);
