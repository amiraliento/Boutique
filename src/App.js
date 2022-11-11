import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Error from "./Component/Error";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import LoginForm from "./Page/LoginForm";
import SignUpForm from "./Page/SignUpForm";
import Clothing from "./Page/Clothing";
import Sweatshirt from "./Page/Sweatshirt";
import Shoes from "./Page/Shoes";
import News from "./Page/News";
import Tshirt from "./Page/Tshirt";
import Pants from "./Page/Pants";
import AllCloth from "./Page/AllCloth";
import MoreSet from "./Page/MoreSet";

const App = () => {
  return (
    <>
      {/* <Header /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/LoginForm" element={<LoginForm />} />
          <Route exact path="/SignUpForm" element={<SignUpForm />} />
          <Route exact path="/Sweatshirt" element={<Sweatshirt />} />
          <Route exact path="/Clothing" element={<Clothing />} />
          <Route exact path="/Tshirt" element={<Tshirt />} />
          <Route exact path="/Pants" element={<Pants />} />
          <Route exact path="/Shoes" element={<Shoes />} />
          <Route exact path="/AllCloth" element={<AllCloth />} />
          <Route exact path="/MoreSet" element={<MoreSet />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
};

export default App;
