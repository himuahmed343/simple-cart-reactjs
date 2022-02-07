import React from "react";
import { useNavigate } from "react-router";
import Products from "../../components/Products/Products";
import Hero from "../../components/Hero/Hero";
import { useUserAuth } from "../../context/AuthContext";

const Home = () => {
  const { addToCart } = useUserAuth();

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

  return (
    <div className="container">
      {user && (
        <div>
          {user.email} <button onClick={handleLogOut}>Sign Out</button>
        </div>
      )}
      <Hero />
      <Products addToCart={addToCart} />
    </div>
  );
};

export default Home;
