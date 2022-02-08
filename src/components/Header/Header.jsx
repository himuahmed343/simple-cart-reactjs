/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import "./Header.css";
const Header = () => {
  const { user } = useUserAuth();
  //Get Cart Products
  const [cart, setCart] = useState([]);

  const getCartProduct = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Cart" + user.uid));
      const totalCartItem = querySnapshot.docs.length;
      setCart(totalCartItem);
    } catch (err) {
      console.log(err);
    }

    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(doc.data());
    // });
  };
  useEffect(() => {
    getCartProduct();
  });
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-items">
            <div className="nav-brand">
              <Link to="/">HelloCom</Link>
            </div>
            <div className="nav-icon">
              <Link to="/cart">
                <RiShoppingCartLine />
                <div>{cart}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
