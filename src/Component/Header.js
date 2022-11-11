import "../Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <div className="Container">
      <div className="text">
        <ul className="List">
          <Link className="text" to={"/News"}>
            <li className="Jadid">جدیدترین‌ها</li>
          </Link>
          <Link className="text" to={"/Shoes"}>
            <li className="Kafsh">کفش</li>
          </Link>
          <Link className="text" to={"/AllCloth"}>
            <li className="Lebas">لباس</li>
          </Link>
        </ul>
      </div>
      <h1 className="h1header">Arod Boutique</h1>

      <div>
        <ul className="Buttoms">
          <li className="store">
            <img className="buttom-img" src="./img/storeimg.png" />
          </li>
          <li className="profile">
            <Link to={"/LoginForm"}>
              <img className="buttom-img" src="./img/profileimg.png" />
            </Link>
          </li>
          <li className="search">
            <img className="buttom-img" src="./img/searchimg.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
