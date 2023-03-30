import React from "react";

const Categories = () => {
  return (
    <div className="my-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto">
      <h1 className="text-cyan-500 md:text-4xl font-extralight py-4">
        Shop By Category
      </h1>
      <div className="my-4 h-96 w-96 m-auto cursor-pointer">Electronics</div>
      <div className="my-4 h-96 w-96 m-auto cursor-pointer">
        Home and Kitchen
      </div>
      <div className="my-4 h-96 w-96 m-auto cursor-pointer">
        Clothing and Accessories
      </div>
      <div className="my-4 h-96 w-96 m-auto cursor-pointer">Beauty</div>
      <div className="my-4 h-96 w-96 m-auto cursor-pointer">Toys and Games</div>
    </div>
  );
};

export default Categories;
