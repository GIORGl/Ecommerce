import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ title, img, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={img} alt="" />
      <div className="checkoutProduct__info">
        <h2>{title}</h2>
        <strong>{price}$</strong>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
