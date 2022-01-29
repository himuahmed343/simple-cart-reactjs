import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import "./Product.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useUserAuth } from "../../context/AuthContext";

const Product = ({ product, addToCart }) => {
  const { user } = useUserAuth();
  const { id, title, category, description, image, price } = product;

  const [cart, setCart] = useState([]);
  //   console.log(title.slice(0, 25), +"...");
  const handleAddToCart = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "cart"), {
        product,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log("cart", product);
  };

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
