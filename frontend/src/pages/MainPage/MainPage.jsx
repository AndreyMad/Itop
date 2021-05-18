import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  Redirect } from "react-router-dom";

import Authorization from '../../components/Authorization/Authorization'
import * as Selectors from '../../redux/Selectors'
import routes from '../../routes/routes'
import withAuthRedirect from '../../components/Hoc/withAuthRedirect'
class AuthPage extends Component {
    
    render() {
        const {isAuth} =this.props
        return (<>
            {isAuth?<Redirect to={routes.USERS_PAGE.path}/>: <Authorization/>}
          </>
        )
    }
}

const mSTP = store => ({
    isAuth: Selectors.getIsAuth(store)
  });
  

   export default withAuthRedirect(connect(mSTP, null)(AuthPage));

