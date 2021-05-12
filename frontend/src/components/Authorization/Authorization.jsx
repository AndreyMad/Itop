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
    isLogin: true,
  };

  handleChange = ({ target }) => {
      console.log('%cAuthorization.jsx line:16 target.id', 'color: #007acc;', target.id);
    console.log("%cAuthorization.jsx line:15 e", "color: #007acc;", target.value);
    this.setState((prevState)=>({
        
        [target.id]:{...prevState[target.id]+target.tvalue}
    }))
  };

  toggleLogin = () => {
    this.setState((prevState) => ({
      email: "",
      password: "",
      userName: "",
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    const { isLogin,email,password,userName } = this.state;
    return (
      <div className={style.container}>
        {isLogin ? (
          <form className={style.form} noValidate autoComplete="off">
            <h2>Sign In</h2>
            <TextField value={email} onChange={this.handleChange} className={style.input} id="email" label="Email" />
            <TextField value={password} onChange={this.handleChange}
              className={style.input}
              type="password"
              id="password"
              label="Password"
            />
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
            <TextField onChange={this.handleChange} value={userName} className={style.input} id="userName" label="Username" />
            <TextField onChange={this.handleChange} value={email} className={style.input} id="email" label="Email" />
            <TextField onChange={this.handleChange} value={password}
              className={style.input}
              type="password"
              id="password"
              label="Password"
            />
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
      </div>
    );
  }
}

export default Authorization;
