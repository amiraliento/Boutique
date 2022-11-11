import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Sweatshirt = () => {
  const { ListSweatshirt } = useUserContext();

  return (
    <div className="clothContainer">
      {ListSweatshirt.map((info) => {
        return (
          <div className="clothCart">
            <img className="imgstyle" src={info.img} />
            <h1>{info.name}</h1>
            <span>{info.sale}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sweatshirt;
