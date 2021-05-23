import React, { Component } from "react";
import style from "./Modal.module.css";
import TextField from "@material-ui/core/TextField";
import "react-datepicker/dist/react-datepicker.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import okBtn from "../../assets/svg/okBtn.svg";
import cancelBtn from "../../assets/svg/cancelBtn.svg";

export default class Modal extends Component {
  state = {
    name: "",
    isGenderMale: true,
    birthDate: "",
    city: "",
    id: "",
  };

  componentDidMount() {
    const { profileToEdit } = this.props;
    if (profileToEdit.id) {
      this.setState({
        name: profileToEdit.name,
        isGenderMale: profileToEdit.isgendermale === "false" ? false : true,
        birthDate: profileToEdit.birthDate,
        city: profileToEdit.city,
        id: profileToEdit.id,
        useremail:profileToEdit.useremail,
        username:profileToEdit.username
      });
    }
  }

  handleDateChange = (value) => {
    this.setState({
      birthDate:value
    });
    // moment(value).format("DD.MM.YYYY"),
  };

  checkboxToggle = ({ target }) => {
    this.setState({ isGenderMale: target.id === "male" ? true : false });
  };

  hsndleInputChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { createProfileHandler, updateProfileHandler } = this.props;
    const user = { ...this.state };
    if (!user.id) {
  
      createProfileHandler(user);
      return;
    }
   updateProfileHandler(user);
  };

  render() {
    const { closeModal } = this.props;
    const { name, isGenderMale, birthDate, city, id } = this.state;

    return (
      <div onClick={closeModal} className={style.overlay} id="overlay">
        <div className={style.container}>
          <form>
            <TextField
              value={name}
              onChange={this.hsndleInputChange}
              className={style.input}
              type="text"
              id="name"
              label="Name"
            />
            <div className={style.checkboxWrapper} htmlFor="gender">
              <span>Gender</span>
              <label className={style.inputLabel} htmlFor="male">
                <input
                  onChange={this.checkboxToggle}
                  checked={isGenderMale}
                  type="radio"
                  id="male"
                  className={style.checkbox}
                ></input>
                Male
              </label>
              <label className={style.inputLabel} htmlFor="female">
                <input
                  onChange={this.checkboxToggle}
                  checked={!isGenderMale}
                  type="radio"
                  id="female"
                  className={style.checkbox}
                ></input>
                Female
              </label>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                animateYearScrolling
                label="Basic example"
                value={birthDate}
                format="dd.MM.yyyy"
                onChange={this.handleDateChange}
              />
            </MuiPickersUtilsProvider>

            <TextField
              value={city}
              onChange={this.hsndleInputChange}
              className={style.input}
              type="text"
              id="city"
              label="City"
            />
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
                onClick={closeModal}
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
