import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Pants = () => {
  const { data, setData } = useUserContext();

  const addtoCart = (info) => {
    const clone = { ...data };
    clone.cart.push(info);
    setData(clone);
  };

  return (
    <div className="clothContainer">
      {data.ListPants.map((info) => {
        return (
          <div>
            <div className="clothCart">
              <img className="imgstyle" src={info.img} />
              <h1>{info.name}</h1>
              <span>{info.sale}</span>
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

export default Pants;
