import React, { useState, useEffect, useContext } from "react";
import "./Body.css";
import { ProductContext } from "../../../ProductCategoryContext";
import Popup from "./Product";
import { Link } from "react-router-dom";
import Product from "./Product";
import { renderIntoDocument } from "react-dom/test-utils";

function Body() {
  // const products = useContext(ProductContext) || [];
  const [showPopUp, setShowPopUp] = useState(false);
  const [product, setProduct] = useState({});
  const [renderAll, setRenderAll] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [addProduct, setAddProduct] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [src, setSrc] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0.099);
  const [categoryInput, setCategoryInput] = useState("");
  const [deadline, setDeadline] = useState(1);

  useEffect(() => {
    const url =
      category === "all"
        ? `https://fakestoreapi.com/products`
        : `https://fakestoreapi.com/products/category/${category}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleCLick = (target) => {
    setShowPopUp(!showPopUp);
    setProduct(target);
    setRenderAll(!renderAll);
  };
  // const addProduct = (e) => {
  //   // e.preventDefault();
  //   let newProduct = {
  //     title: "test product",
  //     price: 13.5,
  //     description: "lorem ipsum set",
  //     image: "logo192.png",
  //     category: "electronic",
  //   };
  //   setProducts([newProduct, ...products]);
  // };

  return (
    <div className="body">
      {!renderAll && (
        <button className="goback" onClick={() => setRenderAll(true)}>
          go back
        </button>
      )}
      {renderAll && (
        <div className="images">
          <img className="banner" src="banner6.jpg" alt=" dwekdmwekldmwekl" />
          <img className="intro" src="basics.png" alt="" />
          <form>
            <h2>Want to sell your own products?</h2>
            <h3>Create it right here!</h3>
            <div className="comp">
              title:{" "}
              <input
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="comp">
              image:{" "}
              <input
                value={src}
                onChange={(e) => {
                  setSrc(e.target.value);
                }}
              />
            </div>
            <div className="comp">
              description:{" "}
              <input
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <div className="comp">
              price:{" "}
              <input
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
              />
            </div>

            <div className="comp">
              category:
              <select
                value={categoryInput}
                onChange={(e) => {
                  setCategoryInput(e.target.value);
                }}
              >
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men clothing">Men clothing</option>
                <option value="women clothing">Women clothing</option>
              </select>
            </div>
            <div className="comp">
              dealdline:{" "}
              <input
                value={deadline}
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
                type="date"
              />
            </div>
          </form>
          <div className="addproductDiv">
            <button
              className="addproductButton"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                let newProduct = {
                  title: titleInput,
                  price: price,
                  description: desc,
                  image: src,
                  category: categoryInput,
                  deadline: deadline,
                };
                setAddProduct(!addProduct);
                setProducts([newProduct, ...products]);
              }}
            >
              add a new product
            </button>
          </div>
          <h1 className="h1">Products</h1>
        </div>
      )}
      {addProduct && (
        <div>
          <input type="text" />
          <input type="text" />
          {setAddProduct(!addProduct)}
        </div>
      )}

      {renderAll &&
        products.map((product) => (
          <div onClick={() => handleCLick(product)} className="body__product">
            <div className="product__title">
              <h3>{product.title}</h3>
            </div>
            )}
            {/* <Link to="/product"> */}
            <img src={product.image ? product.image : "logo192.png"} alt="" />
            {/* </Link> */}
            <h2 className="price">{product.price}$</h2>
          </div>
        ))}
      {!renderAll && (
        <Product
          setRenderAll
          img={product.image}
          desc={product.description}
          price={product.price}
          title={product.title}
          deadline={product.deadline}
        />
      )}
    </div>
  );
}

export default Body;
