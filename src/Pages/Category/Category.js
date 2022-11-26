import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-3xl text-center font-bold">
        {categories.length} Categories of Truck
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
