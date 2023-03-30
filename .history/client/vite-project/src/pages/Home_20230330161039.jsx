import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";
import AllProducts from "./AllProducts";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="py-12 overflow-hidden dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono ">
      <HomeSwiper slides={slides} />
      <Categories />
      <AllProducts />
    </div>
  );
};

export default Home;
