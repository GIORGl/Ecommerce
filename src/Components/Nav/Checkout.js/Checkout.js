import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket.length > 0 && (
          <div>
            <h1>Your shopping basket</h1>
            {basket.map((product) => (
              <CheckoutProduct
                title={product.title}
                img={product.img}
                price={product.price}
              />

              // <div className="checkout__product">
              //   <h1>{product.title}</h1>
              //   <img src={product.img} alt="" />
              //   <h3>{product.price}$</h3>
              // </div>
            ))}
          </div>
        )}
        {basket.length === 0 && (
          <div className="empty__basket">
            <h1>your basket is empty</h1>
            <p>
              You have no items in the basket to buy or order on click "Add to
              basket" button next to an item
            </p>
          </div>
        )}
      </div>
      <div className="checkout__right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
