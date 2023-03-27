import React from "react";
import Swiper from "swiper";
import slides from "../homeImages.json";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-24 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <Swiper slides={slides} />
    </div>
  );
};

export default Home;
