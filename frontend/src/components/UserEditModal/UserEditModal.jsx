import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import style from './UserEditModal.module.css'
import okBtn from '../../assets/svg/okBtn.svg'
import cancelBtn from "../../assets/svg/cancelBtn.svg";

class UserEditModal extends Component {
    state={

    }

    handleInputChange =(e)=>{
        console.log('%cUserEditModal.jsx line:13 e', 'color: #007acc;', e);
    }

    checkboxToggle =(e)=>{
        console.log('%cUserEditModal.jsx line:17 e', 'color: #007acc;', e);
    }
    render() {
        const {closeModal,name} =this.state
        return (
            <div onClick={closeModal} className={style.overlay} id="overlay">
            <div className={style.container}>
              <form>
                <TextField
                  value={name}
                  onChange={this.handleInputChange}
                  className={style.input}
                  type="text"
                  id="username"
                  label="User name"
                />
                        <TextField
                //   value={city}
                //   onChange={this.hsndleInputChange}
                  className={style.input}
                  type="text"
                  id="email"
                  label="Email"
                />
                <div className={style.checkboxWrapper} htmlFor="gender">
                  <span>Gender</span>
                  <label className={style.inputLabel} htmlFor="male">
                    <input
                      onChange={this.checkboxToggle}
                    //   checked={isGenderMale}
                      type="radio"
                      id="male"
                      className={style.checkbox}
                    ></input>
                    Male
                  </label>
                  <label className={style.inputLabel} htmlFor="female">
                    <input
                      onChange={this.checkboxToggle}
                    //   checked={!isGenderMale}
                      type="radio"
                      id="female"
                      className={style.checkbox}
                    ></input>
                    Female
                  </label>
                </div>
              
    
        
                <div className={style.btnWrapper}>
                  <button
                    className={style.formBtn}
                    // onClick={this.formSubmit}
                    id="submitBtn"
                    type="submit"
                  >
                    <img src={okBtn} alt="ok button" role="presentation" />
                  </button>
                  <button
                    className={style.formBtn}
                    // onClick={closeModal}
                    type="button"
                    name="closebtn"
                    id="closeBtn"
                  >
                    <img
                      src={cancelBtn}
                      name="closeimg"
                      alt="cancel button"
                      role="presentation"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default UserEditModal;