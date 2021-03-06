import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* <h1>subtotal</h1> */}
      <p>
        Subtotal ({basket.length} items): <strong>{0}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <p>
        <button>Proceed to checkout</button>
      </p>
    </div>
  );
}

export default Subtotal;
