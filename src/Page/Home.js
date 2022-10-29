import "../Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
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

      <hr />
      <div className="container1">
        <div>
          <img src="./img/shoesh.jpg" />
          <span className="textimg">کفش</span>
        </div>

        <div>
          <img src="./img/Pantsh.jpg" />
          <span className="textimg">شلوار</span>
        </div>
        <div>
          <img src="./img/tshirth.jpg" />
          <span className="textimg">تیشرت</span>
        </div>

        <div>
          <img src="./img/shirth.jpg" />
          <span className="textimg">پیراهن</span>
        </div>

        <div>
          <img src="./img/sweatshirth.jpg" />
          <span className="textimg">سویشرت</span>
        </div>
      </div>

      <hr />
      <Footer />
    </>
  );
};

export default Home;
