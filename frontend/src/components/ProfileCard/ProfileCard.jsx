import React from 'react';
import moment from 'moment';
import style from './ProfileCard.module.css'
import editSvg from '../../assets/svg/edit.svg'
import thrashSvg from '../../assets/svg/thrash.svg'

const ProfileCard = ({profile, showModal, deleteHandler}) => {

   const date = moment( profile.birthDate).format("DD.MM.YYYY")

   
    return (
        <div  className={style.cardWrapper}>
            <span>{profile.name}</span>
            <span>{profile.isGenderMale?"Male":"Female"}</span>
            <span>{ date}</span>
            <span>{profile.city}</span>
            <div className={style.btnWrapper}>
                <button className={style.btnL} onClick={()=>showModal(profile)} >Edit<img className={style.svg} alt='edit button' src={editSvg}></img></button>
                <button className={style.btnR} onClick={()=>deleteHandler(profile.id)} >Delete<img alt='delete button' className={style.svg} src={thrashSvg}></img></button>
            </div>
        </div>
    );
};

export default ProfileCard;