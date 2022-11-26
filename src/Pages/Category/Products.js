import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
