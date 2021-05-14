import React, { Component } from "react";
import style from "./Authorization.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class Authorization extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    isAdmin: false,
    isLogin: false,
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
      isLogin: !prevState.isLogin,
    }));
  };
  checkboxToggle=()=>{
    this.setState((prevState)=>({
      isAdmin:!prevState.isAdmin
    }))
  }
  render() {
    const { isLogin, email, password, userName,isAdmin } = this.state;
    return (
      <>
        {isLogin ? (
          <form className={style.form} autoComplete="off">
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
          <form className={style.form} noValidate autoComplete="off">
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

              <label className={style.checkboxLabel} for="isAdmin">
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
              {isLogin ? "Registration" : "Authorization"}
            </button>
          </form>
        )}
      </>
    );
  }
}

export default Authorization;
