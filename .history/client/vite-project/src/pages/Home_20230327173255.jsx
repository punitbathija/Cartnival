import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-24 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <HomeSwiper slides={slides} />
    </div>
  );
};

export default Home;
