import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";
import Store from "../Component/Cart";
import { Link } from "react-router-dom";
const AllCloth = () => {
  const { data, setData } = useUserContext();

  const addtoCart = (info) => {
    const clone = { ...data };
    clone.cart.push(info);
    setData(clone);
  };

  return (
    <div className="clothContainer">
      {data.AllCloth.map((info) => {
        return (
          <div>
            <div className="clothCart">
              <img className="aks-1" src={info.img} />
              <h1>{info.name}</h1>
              <span>{info.sale}</span>
              <br />
            </div>
            <button className="addCart" onClick={() => addtoCart(info)}>
              افزودن به سبد خرید
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllCloth;
