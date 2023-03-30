import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div className="py-2 overflow-hidden dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono ">
      <HomeSwiper slides={slides} />
      <AllProducts />
    </div>
  );
};

export default Home;
