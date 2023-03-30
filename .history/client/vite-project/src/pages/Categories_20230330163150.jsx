import React from "react";

const Categories = () => {
  return (
    <div>
      <h1 className="text-cyan-500 md:text-4xl font-extralight p-12">
        Shop By Category
      </h1>
      <div className="my-6 flex flex-wrap justify-center justify-items-center align-middle text-center m-auto">
        <div className="my-4 h-96 w-96 m-auto cursor-pointer border-2">
          Electronics
        </div>
        <div className="my-4 h-96 w-96 m-auto cursor-pointer border-2">
          Home and Kitchen
        </div>
        <div className="my-4 h-96 w-96 m-auto cursor-pointer border-2">
          Clothing and Accessories
        </div>
        <div className="my-4 h-96 w-96 m-auto cursor-pointer border-2">
          Beauty
        </div>
        <div className="my-4 h-96 w-96 m-auto cursor-pointer border-2">
          Toys and Games
        </div>
      </div>
    </div>
  );
};

export default Categories;
