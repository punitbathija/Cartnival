import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";

const Home = () => {
  return (
    <div className="py-12 overflow-hidden dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono ">
      <HomeSwiper slides={slides} />
      <h1 className="text-cyan-500 text-3xl md:text-4xl font-extralight p-12">
        Shop By Category <CategoryRoundedIcon fontSize="50" />
      </h1>
      <Categories />
      <h1 className="text-cyan-500 text-3xl md:text-4xl font-extralight p-12">
        Browse All Products <CategoryRoundedIcon fontSize="50" />
      </h1>
      <AllProducts />
    </div>
  );
};

export default Home;
