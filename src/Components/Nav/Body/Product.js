import React from "react";
import "./Product.css";
import { usestate } from "react";
import { useStateValue } from "../../../StateProvider";

function Product({ title, img, desc, price, deadline }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        img: img,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <h1 className="title">{title}</h1>
      <img src={img} alt="image" />
      <p className="description">{desc}</p>
      <h1>{deadline}</h1>
      <div className="checkout">
        <h2>{price}$</h2>
        <button onClick={addToBasket} className="checkout__button">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Product;
