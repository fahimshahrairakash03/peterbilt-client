import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Category from "../Category/Category";
import About from "./About";
import Advertise from "./Advertise";
import Banner from "./Banner";

const Home = () => {
  const { advertise } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Category></Category>
      {advertise[0] && <Advertise></Advertise>}
    </div>
  );
};

export default Home;
