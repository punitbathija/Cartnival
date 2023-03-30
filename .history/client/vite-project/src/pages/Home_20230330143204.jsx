import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";
import ProductComponent from "./ProductComponent";

const Home = () => {
  return (
    <div className="py-2 overflow-hidden dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono ">
      <HomeSwiper slides={slides} />
      <ProductComponent />
    </div>
  );
};

export default Home;
