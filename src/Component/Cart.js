import "../AllList.css";
import React from "react";
import { useUserContext } from "../UserContext";

const Cart = () => {
  const { data } = useUserContext();

  return (
    <div>
      <h1 className="titleCart">سبد خرید</h1>
      <div className="clothContainer">
        {data.cart &&
          data.cart.map((product) => {
            return (
              <div className="storeCart">
                <img src={product.img} />
                {product.sale}
                <br />
                {product.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
