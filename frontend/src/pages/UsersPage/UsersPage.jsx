import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as Selectors from '../../redux/Selectors'
import * as usersOperations from '../../redux/Users/usersOperations'
import style from './UsersPage.module.css'
 class UsersPage extends Component {
    componentDidMount() {
        const {getUsers,token}=this.props
       getUsers(token)
    }
    
    render() {
        const {users,logedUser}=this.props
      
        return (
            <section className={style.container}>
                
               <h1>{users.length>=1?'User:':'Users:'}</h1>
               <ul className={style.cardContainer}>
                   {users.map(user=>{
                       return <li key={user.id} className={style.cardWrapper}>
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
    
    token:Selectors.getToken(store),
    logedUser: Selectors.getUser(store),
    users: Selectors.getUsers(store)
})
   export default connect(mSTP, mDTP)(UsersPage);