import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";
const MoreSet = () => {
 
  const { MoreSet } = useUserContext();

  return (
    <div className="clothContainer">
      {MoreSet.map((info) => {
        return (
          <div className="clothCart">
           <img  className="mimg" src={info.img} />

          </div>
        );
      })}
    </div>
  );
};

export default MoreSet;