import React, { Component } from "react";
import style from "./Authorization.module.css";
import TextField from "@material-ui/core/TextField";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import * as EmailValidator from "email-validator";
import * as authOperations from "../../redux/Auth/authOperations";
import * as Selectors from '../../redux/Selectors'


class Authorization extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    isAdmin: false,
    isAuthorization: true,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  toggleLogin = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      email: "",
      password: "",
      userName: "",
      isAuthorization: !prevState.isAuthorization,
    }));
  };
  checkboxToggle = () => {
    this.setState((prevState) => ({
      isAdmin: !prevState.isAdmin,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, registration  } = this.props;
    const { isAuthorization, email, password, userName, isAdmin } = this.state;
    if (!EmailValidator.validate(email)) {
      return NotificationManager.warning("", "Check email", 2000);
    }
    if (password.length < 5) {
          return NotificationManager.warning(
            "",
            "Password lengh must be > 5",
            2000
          );
        }

      
    if (!isAuthorization) {
      if (!userName) {
        return NotificationManager.warning("", "Check user name", 2000);
      }
      return  registration({ email, password, userName, isAdmin });
    } 
    login({ email, password });
  };

  render() {
    const { isAuthorization, email, password, userName, isAdmin } = this.state;
    const {isAuth} =this.props
    return (
      <>{!isAuth? <>
        {isAuthorization ? (
          <form
            className={style.form}
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <h2>Sign In</h2>
            <div>
              <TextField
                autoComplete="nope"
                value={email}
                onChange={this.handleChange}
                className={style.input}
                id="email"
                label="Email"
              />
              <TextField
                autoComplete="new-password"
                value={password}
                onChange={this.handleChange}
                className={style.input}
                type="password"
                id="password"
                label="Password"
              />
            </div>
            <button className={style.submitBtn} type="submit">
              Sign in
            </button>
            <p>Not register yet? </p>
            <button
              type="button"
              onClick={this.toggleLogin}
              className={style.switchBtn}
            >
              Register
            </button>
          </form>
        ) : (
          <form
            onSubmit={this.handleSubmit}
            className={style.form}
            noValidate
            autoComplete="off"
          >
            <h2>Sign Up</h2>
            <div>
              <TextField
                onChange={this.handleChange}
                value={userName}
                className={style.input}
                id="userName"
                label="Username"
              />
              <TextField
                onChange={this.handleChange}
                value={email}
                className={style.input}
                id="email"
                label="Email"
              />
              <TextField
                onChange={this.handleChange}
                value={password}
                className={style.input}
                type="password"
                id="password"
                label="Password"
              />

              <label className={style.checkboxLabel} htmlFor="isAdmin">
                <input
                  onChange={this.checkboxToggle}
                  checked={isAdmin}
                  type="checkbox"
                  id="isAdmin"
                  className={style.checkbox}
                ></input>
                Is admin?
              </label>
            </div>
            <button className={style.submitBtn} type="submit">
              Sign Up
            </button>
            <p>Allready registered? </p>
            <button
              type="button"
              onClick={this.toggleLogin}
              className={style.switchBtn}
            >
              {isAuthorization ? "Registration" : "Authorization"}
            </button>
          </form>
        )}
        <NotificationContainer></NotificationContainer>
     </> :null }
      </>
    );
  }
}
const mDTP = (dispatch) => ({
  login: (user) => dispatch(authOperations.login(user)),
  registration: (user) => dispatch(authOperations.register(user)),
});
const mSTP = store => ({
  isAuth: Selectors.getIsAuth(store),
});

export default connect(mSTP, mDTP)(Authorization);
