import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import "./Product.css";

const Product = ({ product }) => {
  const { id, title, category, description, image, price } = product;

  const [cart, setCart] = useState([]);
  //   console.log(title.slice(0, 25), +"...");
  const handleAddToCart = (product) => {
    let qty = 0;

    console.log("cart");
  };
  // console.log(cart);
  return (
    <div className="product">
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <h3>{title.length > 10 ? title.slice(0, 35) + "..." : title}</h3>
        <p>Price: $ {price}</p>
        <button
          onClick={() => {
            handleAddToCart();
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
