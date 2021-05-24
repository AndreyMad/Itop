import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import style from "./UserEditModal.module.css";
import okBtn from "../../assets/svg/okBtn.svg";
import cancelBtn from "../../assets/svg/cancelBtn.svg";

class UserEditModal extends Component {
  state = {
    username: "",
    email: "",
    isadmin: false,
 
  };
  componentDidMount() {
    this.setState({
      ...this.props.user,
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    });
  };

  checkboxToggle = (e) => {
    this.setState({
      isadmin: e.target.id === "admin" ? true : false,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { updateUserHandler } = this.props;
    updateUserHandler({ ...this.state });
  };



  render() {
    const { username, email,  isadmin } = this.state;
    const {closeUserEditModal}=this.props
    return (
      <div onClick={closeUserEditModal} className={style.overlay} id="overlay">
        <div className={style.container}>
          <form>
            <TextField
              value={username}
              onChange={this.handleInputChange}
              className={style.input}
              type="text"
              id="username"
              label="User name"
            />
            <TextField
              value={email}
              className={style.input}
              onChange={this.handleInputChange}
              type="text"
              id="email"
              label="Email"
            />

            <div className={style.checkboxWrapper} htmlFor="gender">
              <span>Role</span>
              <label className={style.inputLabel} htmlFor="male">
                <input
                  onChange={this.checkboxToggle}
                  checked={!isadmin}
                  type="radio"
                  id="user"
                  className={style.checkbox}
                ></input>
                user
              </label>
              <label className={style.inputLabel} htmlFor="female">
                <input
                  onChange={this.checkboxToggle}
                  checked={isadmin}
                  type="radio"
                  id="admin"
                  className={style.checkbox}
                ></input>
                admin
              </label>
            </div>

            <div className={style.btnWrapper}>
              <button
                className={style.formBtn}
                onClick={this.formSubmit}
                id="submitBtn"
                type="submit"
              >
                <img src={okBtn} alt="ok button" role="presentation" />
              </button>
              <button
                className={style.formBtn}
                onClick={closeUserEditModal}
                type="button"
                name="closebtn"
                id="closebtn"
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
