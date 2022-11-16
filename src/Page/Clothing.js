import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Clothing = () => {
  // const {db} = useContext(UserContext);
  // console.log(db.ListClothing)

  // روش اول
  const { data, setData } = useUserContext();
  // console.log(ListClothing);

  const addtoCart = (info) => {
    const clone = { ...data };
    clone.cart.push(info);
    setData(clone);
  };

  return (
    <div className="clothContainer">
      {data.ListClothing.map((info) => {
        return (
          <div>
            <div className="clothCart">
              <img className="imgstyle" src={info.img} />
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

export default Clothing;
