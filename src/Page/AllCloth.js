import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const AllCloth = () => {

  const { AllCloth } = useUserContext();

  return (
    <div className="clothContainer">
      {AllCloth.map((info) => {
        return (
          <div className="clothCart">
           <img className="aks-1" src={info.img} />
            <h1>{info.name}</h1>
            <span>{info.sale}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AllCloth;