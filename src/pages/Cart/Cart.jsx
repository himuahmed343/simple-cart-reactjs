import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useUserAuth } from "../../context/AuthContext";
import Product from "../../components/Product/Product";
import "./Cart.css";
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, addToCart } = useUserAuth();

  const fetchData = async () => {
    try {
      await getDocs(collection(db, "Cart" + user.uid)).then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.docs.forEach((element) => {
          var data = element.data();
          setProducts((arr) => [...arr, data]);
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    // getCartProduct();
    fetchData();
  }, [user]);

  console.log(products);
  // if (products) {
  //   for (let i = 0; i < products.length; i++) {
  //     const element = products[i];
  //     console.log(element.prod);
  //   }
  // }

  return (
    <div className="container cart">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, index) => (
          <Product key={index} product={product.prod} addToCart={addToCart} />
        ))
      )}
      cart
    </div>
  );
};

export default Cart;
