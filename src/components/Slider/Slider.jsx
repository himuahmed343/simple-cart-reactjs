import React from "react";
import "./Slider.css";
const Slider = ({ product }) => {
  return (
    <>
      <img src={product.img} alt="" />
      <div className="slider-content">
        <h1>{product.title}</h1>
        <p>{product.text}</p>
        <button className="btn">Shop Now</button>
      </div>
    </>
  );
};

export default Slider;
