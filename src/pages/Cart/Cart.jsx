import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useUserAuth } from "../../context/AuthContext";

const Cart = () => {
  const getCartProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  useEffect(() => {
    getCartProduct();
  }, []);
  return <div>Cart</div>;
};

export default Cart;
