import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState({});

  return (
    <div className="my-5">
      <h1 className="text-center text-4xl font-bold my-5 text-red-900">
        Products {products.length}{" "}
      </h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            setProduct={setProduct}
            product={product}
          ></ProductCard>
        ))}
      </div>
      <BookingModal product={product}></BookingModal>
    </div>
  );
};

export default Products;
