import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const productsCall = await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => {
          console.error(err);
        });
      setLoading(false);
      setProducts(productsCall);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="products">
      {loading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))
      )}
      {/* {products.map((product, index) => (
        <Product key={index} product={product} />
      ))} */}
    </div>
  );
};

export default Products;
