import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
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
                <div>3</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
