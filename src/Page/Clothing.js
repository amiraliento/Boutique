import "../Clothing.css";
import React from "react";
import ListClothing from "../UserContext";
import { useState, useContext } from "react";
import { useUserContext } from "../UserContext";
import { UserContext } from "../UserContext";
const Clothing = () => {
  // const {db} = useContext(UserContext);
  // console.log(db.ListClothing)

  // روش اول
  const { ListClothing } = useUserContext();
  console.log(ListClothing);

  return (
    <div className="clothContainer">
      {ListClothing.map((info) => {
        return (
          <div className="clothCart">
           <img src="../img/shirtpage/shirt1.jpg" />
            <h1>{info.name}</h1>
            <span>{info.sale}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Clothing;
