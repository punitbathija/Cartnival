import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";

const Home = () => {
  return (
    <div className="my-4 overflow-hidden">
      <HomeSwiper slides={slides} />
    </div>
  );
};

export default Home;
