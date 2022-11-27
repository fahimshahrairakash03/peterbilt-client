import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/products?email=${user?.email}`;
  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl text-center text-red-900 my-3 font-bold">
        My products
      </h2>
      <div className="grid gap-5 sm:grid-cols-1  lg:grid-cols-2">
        {products?.map((product, i) => (
          <MyProductCard key={product._id} product={product}></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
