import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as authSelectors from '../../redux/Auth/authSelectors'
import * as usersOperations from '../../redux/Users/usersOperations'
import * as usersSelectors from '../../redux/Users/usersSelectors'
import style from './UsersPage.module.css'
 class UsersPage extends Component {
    componentDidMount() {
        const {getUsers,token,users}=this.props
        console.log(users);
       getUsers(token)
    }
    
    render() {
        const {users,logedUser}=this.props
        console.log('%cUsersPage.jsx line:16 object', 'color: #007acc;', logedUser);
      
        return (
            <section className={style.container}>
               <h1>Users:</h1>
               <ul className={style.cardContainer}>
                   {users.map(user=>{
                       return <li className={style.cardWrapper}>
                           <p>{logedUser.name}</p>
                           <p>{user.email}</p>
                           <p>{user.profiles||'0 profiles'}</p>
                       </li>
                   })}
                   </ul> 
            </section>
        )
    }
}
const mDTP = (dispatch) => ({
    getUsers: (token) => dispatch(usersOperations.getUsers(token)),
  });
const mSTP = store=>({
    token:authSelectors.getToken(store),
    logedUser: authSelectors.getUser(store),
    users: usersSelectors.getUsers(store)
})
   export default connect(mSTP, mDTP)(UsersPage);