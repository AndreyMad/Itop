import React from 'react';
import style from './SubmitModal.module.css'
import okBtn from "../../assets/svg/okBtn.svg";
import cancelBtn from "../../assets/svg/cancelBtn.svg";

const SubminModal = ({text, submit, cancel}) => {

    return (
        <div className={style.overlay} onClick={cancel}>
            <div className={style.container}>
                <span>
                   {text||'Submit your action'}
                </span>
                <button className={style.button} onClick={submit} id='submitBtn'>
                <img
                  src={okBtn}
                  name="okimg"
                  alt="submit button"
                  role="presentation"
                />

                </button>
                <button className={style.button} onClick={cancel} id='cancelBtn'>
                <img
                  src={cancelBtn}
                  name="closeimg"
                  alt="cancel button"
                  role="presentation"
                />
                </button>
            </div>
        </div>
    );
};

export default SubminModal;