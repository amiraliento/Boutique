import "../LoginForm.css";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="page">
      <h1 className="H1"> ورود </h1>
      <div class="container">
        <input
          dir="rtl"
          className="input"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          name="psw"
          required
        />
        <input
          dir="rtl"
          className="password"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          name="psw"
          required
        />
        <Link to={"/"}>
          <button className="Login" type="submit">
            ورود
          </button>
        </Link>
        <Link to={"/SignUpForm"}>
          <button className="signup" type="submit">
            ثبت نام{" "}
          </button>
        </Link>
        <span class="psw">
          {" "}
          <a href="#">رمز عبور؟ </a> فراموشی{" "}
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
