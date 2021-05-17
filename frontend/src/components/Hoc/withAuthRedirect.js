/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/Auth/authSelectors';
import routes from '../../routes/routes';

const withAuthRedirect = Component => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    return isAuth ? (
      <Redirect to={routes.USERS_PAGE.path} />
    ) : (
      <Component {...restProps} />
    );
  }

  const mapStateToProps = state => ({
    isAuth: authSelectors.getIsAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
