import React from "react";

const Product = ({ product }) => {
  const { id, title, category, description, image, price } = product;
  //   console.log(title.slice(0, 25), +"...");
  return (
    <div className="product">
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <h3>Name: {title.length > 10 ? title.slice(0, 35) + "..." : title}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
