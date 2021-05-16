import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as usersOperations from '../../redux/Users/usersOperations'
import * as authSelectors from '../../redux/Auth/authSelectors'
import * as usersSelectors from '../../redux/Users/usersSelectors'
 class ProfilesPage extends Component {
    componentDidMount() {
        const {getUsers,token,users}=this.props
        console.log(users);
       getUsers(token)
    }
    
    render() {
        return (
            <div>
               <h3>ProfilesPage</h3> 
            </div>
        )
    }
}

  const mDTP = (dispatch) => ({
    getUsers: (token) => dispatch(usersOperations.getUsers(token)),
  });
const mSTP = store=>({
    token:authSelectors.getToken(store),
    users: usersSelectors.getUsers(store)
})
   export default connect(mSTP, mDTP)(ProfilesPage);