import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";

const Home = () => {
  return (
    <div>
      <HomeSwiper slides={slides} className="bg-black" />
    </div>
  );
};

export default Home;
