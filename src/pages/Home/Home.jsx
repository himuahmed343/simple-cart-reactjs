import React from "react";
import { useNavigate } from "react-router";
import Products from "../../components/Products/Products";
import { useUserAuth } from "../../context/AuthContext";

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

  return (
    <div className="container">
      {user && (
        <div>
          {user.email} <button onClick={handleLogOut}>Sign Out</button>
        </div>
      )}
      <Products />
    </div>
  );
};

export default Home;
