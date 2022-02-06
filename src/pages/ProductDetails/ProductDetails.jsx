import React, { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";
import { useUserAuth } from "../../context/AuthContext";
import "./ProductDetails.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ProductDetails = () => {
  const { products, loading, user } = useUserAuth();
  const [qty, setQty] = useState(1);
  const [prodPrice, setProdPrice] = useState(0);
  // console.log(products);
  const productTitle = useParams();
  let navigate = useNavigate();

  const product = products.filter(
    (product) => product.title === productTitle.productTitle
  );

  const { id, title, description, price, image } = product[0];

  const prodTotalPrice = () => {
    const totalPrice = price * qty;
    setProdPrice(totalPrice);
  };

  useEffect(() => {
    prodTotalPrice();
  }, [qty]);

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

  const handleAddToCart = async (prod) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "Cart" + user.uid));
      querySnapshot.forEach((doc) => {
        const products = doc.data();
        // if (product.id === products.prod.id) {
        //   console.log(products.prod.id);
        // } else {
        //   console.log("Bhul hoise boss");
        // }
        console.log(products);
        console.log(product);
        // products.forEach((product) => {
        //   console.log("product", product);
        // });
      });
    } else {
      navigate("/login");
    }
  };

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
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              <RiShoppingCartLine
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginRight: "5px",
                }}
              />
              Add to Cart{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
