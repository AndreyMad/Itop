import React from 'react'
import { connect } from "react-redux";
import style from './DashboardPage.module.css'
import * as Selectors from '../../redux/Selectors'
import moment from 'moment';

const DashboardPage = ({users,profiles}) => {

const adultsProfiles =profiles.filter(el=>{
    console.log(el.birthDate);
    console.log( moment(new Date()).diff(el.birthDate,'years'));
 return moment(new Date()).diff(el.birthDate,'years')>18
})

return (
        <div className={style.container}>
            <h2 >Dashboard:</h2>
        <div className={style.wrapper}>
            <h3>Users:</h3>
            <span>{users.length}</span>
        </div>
        <div className={style.wrapper}>
        <h3>Profiles:</h3>
            <span>{profiles.length}</span>
        </div>
        <div className={style.wrapper}>
        <h3>Profiles over 18 years old:</h3>
            <span>{adultsProfiles.length}</span>
        </div>
       </div>
    );
};

const mSTP = (store) =>({
    users:Selectors.getUsers(store),
    profiles: Selectors.getProfiles(store)
})

export default connect(mSTP,null)(DashboardPage);

