import React from "react";
import Category from "../Category/Category";
import About from "./About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Category></Category>
    </div>
  );
};

export default Home;
