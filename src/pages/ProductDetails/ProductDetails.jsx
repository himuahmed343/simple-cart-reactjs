import React from "react";
import { useParams } from "react-router";
import { useUserAuth } from "../../context/AuthContext";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { products, loading } = useUserAuth();

  const productTitle = useParams();
  //   console.log(productTitle.productTitle);
  const product = products.filter(
    (product) => product.title === productTitle.productTitle
  );

  const { id, title, description, price, image } = product[0];
  console.log(product);

  return (
    <div className="container">
      <div className="productDetails" key={id}>
        <div className="leftItem">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="rightItem">
          {" "}
          <h1>{title}</h1>
          <p>{description}</p>
          <h1>${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
