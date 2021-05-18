/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Selectors from '../../redux/Selectors';
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
    isAuth: Selectors.getIsAuth(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
