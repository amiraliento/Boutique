import React from "react";
import { Link } from "react-router-dom";
import "../SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="pages">
      <h1 className="H1s"> ثبت نام </h1>
      <div class="container">
        <h3 className="Names">نام کاربری</h3>
        <input
          dir="rtl"
          className="inputs"
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          name="psw"
          required
        />
        <h3 className="pasws">رمز عبور</h3>
        <input
          dir="rtl"
          className="passwords"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          name="psw"
          required
        />
        <h3 className="pasws">تکرار رمز عبور</h3>
        <input
          dir="rtl"
          className="passwords"
          type="password"
          placeholder="رمز عبور خود را مجدد وارد کنید"
          name="psw"
          required
        />
        <h3 className="numbers">شماره تلفن</h3>
        <input
          dir="rtl"
          className="passwords"
          type="number"
          placeholder="789****0912"
          name="psw"
          required
        />
        <h3 className="gmails">پست الکترونیک(اختیاری)</h3>
        <input
          dir="rtl"
          className="passwords"
          type="email"
          placeholder="BoutiqueAmir@gmail.com"
          name="psws"
          required
        />
        <Link to={"/"}>
          <button className="signups" type="submit">
            ثبت نام
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
