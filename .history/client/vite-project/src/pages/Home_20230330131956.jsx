import React from "react";
import HomeSwiper from "../HomeSwiper";
import slides from "../homeImages.json";

const Home = () => {
  return (
    <div>
      Hello
      <HomeSwiper slides={slides} />
    </div>
  );
};

export default Home;
