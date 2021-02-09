import React, { useEffect, useRef, useState, useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { ProductContext } from "../../ProductCategoryContext";
import { useStateValue } from "../../StateProvider";


function Nav() {
  const [ {basket} ] = useStateValue();
  console.log(`basket>>>${basket}`)
  const [category, setCategory] = useState("all");
  return (
    <div className="nav">
      <Link to="/">
        <img src="logo.png" alt="shop logo" />
      </Link>

      <select
        onChange={(e) => {
          setCategory(e.target.value);
          console.log(category);
        }}
        className="nav__select"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men clothing">Clothing(Men)</option>
        <option value="women clothing">Clothing(Women)</option>
      </select>
<Link to='/checkout'>
<div className="nav__basket">
        <ShoppingBasketIcon className="basket__icon" />
        <span>{basket?.length}</span>
      </div>
</Link>
     
    </div>
  );
}

export default Nav;
