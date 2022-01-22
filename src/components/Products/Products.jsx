import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Products;
