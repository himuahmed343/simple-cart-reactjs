import { addDoc, collection } from "@firebase/firestore";
import React from "react";
import { useNavigate } from "react-router";
import Products from "../../components/Products/Products";
import { useUserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const Home = () => {
  const { user, logOut } = useUserAuth();
  let navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (prod) => {
    let Product;
    if (user) {
      console.log(prod);
      Product = prod;
      Product["qty"] = 1;
      Product["TotalProductPrice"] = prod.qty * prod.price;

      try {
        const docRef = await addDoc(collection(db, "Cart" + user.uid), {
          prod,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container">
      {user && (
        <div>
          {user.email} <button onClick={handleLogOut}>Sign Out</button>
        </div>
      )}
      <Products addToCart={addToCart} />
    </div>
  );
};

export default Home;
