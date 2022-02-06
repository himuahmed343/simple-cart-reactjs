import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { id, title, category, description, image, price } = product;

  //   console.log(title.slice(0, 25), +"...");

  let productDetails = `/product/${title}`;
  // console.log(cart);
  return (
    <div className="product">
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <Link to={productDetails}>
          {" "}
          <h3>{title.length > 10 ? title.slice(0, 35) + "..." : title}</h3>
        </Link>
        <p>Price: $ {price}</p>
        <button
          onClick={() => {
            addToCart(product);
          }}
        >
          <RiShoppingCartLine
            style={{ fontWeight: "bold", fontSize: "20px", marginRight: "5px" }}
          />
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
