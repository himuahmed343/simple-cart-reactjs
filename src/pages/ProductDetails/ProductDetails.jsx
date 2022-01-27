import React, { useState } from "react";
import { useParams } from "react-router";
import { useUserAuth } from "../../context/AuthContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { products, loading } = useUserAuth();
  const [qty, setQty] = useState(1);
  const [prodPrice, setProdPrice] = useState(0);
  // console.log(products);
  const productTitle = useParams();
  //   console.log(productTitle.productTitle);
  const product = products.filter(
    (product) => product.title === productTitle.productTitle
  );

  const { id, title, description, price, image } = product[0];

  const incrementBtn = () => {
    const newCount = qty + 1;

    const totalPrice = price * newCount;
    setQty(newCount);
    setProdPrice(totalPrice);
  };

  const decrementBtn = () => {
    if (qty > 1) {
      const newCount = qty - 1;

      const totalPrice = price / newCount;

      setQty(newCount);
      setProdPrice(totalPrice);
    } else {
      setQty(qty);
    }
  };

  // const totalPrice = () => {
  //   setProdPrice(price * qty);
  // };
  console.log(prodPrice);

  // const handleChange = (e) => {
  //   const value = parseInt(e.target.value);
  // };

  return (
    <div className="container">
      {!product ? (
        loading
      ) : (
        <div className="productDetails" key={id}>
          <div className="leftItem">
            <img src={image} alt="" width="100%" />
          </div>
          <div className="rightItem">
            {" "}
            <h1>{title}</h1>
            <p>{description}</p>
            <h1>${!prodPrice ? price : prodPrice}</h1>
            <div className="cart-qty">
              <button className="decrementBtn" onClick={decrementBtn}>
                -
              </button>

              <input
                type="number"
                value={qty}
                onChange={(e) => {
                  setQty(parseInt(e.target.value));
                }}
              />

              <button className="incrementBtn" onClick={incrementBtn}>
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
