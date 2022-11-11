import "../Home.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const Home = () => {
  const navigation = useNavigate();

  return (
    <>
      <Header />

      <div className="img1-div">
        <img
          onClick={() => navigation("")}
          className="img1"
          src="./img/bgcover.jpg"
          alt="clothing"
        />
      </div>

      <div className="jstyle">
        <img className="newstyleimg" src="./img/Jadid.jpg" />
      </div>

      <div className="container1">

        <div>
          <img src="./img/shoesh.jpg" />
          <Link to={"Shoes"}>
          <span className="textimg">کفش</span>
          </Link>
        </div>

        <div>
          <img src="./img/Pantsh.jpg" />
          <Link to={"Pants"}>
          <span className="textimg">شلوار</span>
          </Link>
        </div>

        <div>
          <img src="./img/tshirth.jpg" />
          <Link to={"Tshirt"}>
            <span className="textimg">تیشرت</span>
          </Link>
        </div>

        <div>
          <img src="./img/shirth.jpg" />
          <Link to={"Clothing"}>
            <span className="textimg">پیراهن</span>
          </Link>
        </div>

        <div>
          <img src="./img/sweatshirth.jpg" />
          <Link to={"Sweatshirt"}>
            <span className="textimg">سویشرت</span>
          </Link>
        </div>
      </div>

      <div>
        <img className="Set1" src="./img/Set1.jpg" />
        <img className="Set2" src="./img/Set2.jpg" />
      </div>

      <br />

      <div className="morestyle">
        <Link to={'MoreSet'}>
        <span className="txtm">+ست های بیشتر</span>
        </Link>
      </div>
      <br />

      <hr />
      <Footer />
    </>
  );
};

export default Home;
