import React from "react";

const Categories = () => {
  return (
    <div className="py-10">
      <h1 className="text-cyan-500 md:text-4xl font-extralight p-12">
        Shop By Category
      </h1>
      <div className="my-6 flex flex-wrap justify-center justify-items-center align-middle text-center m-auto">
        <div className="bg-[url('https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
            Electronics
          </h1>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
            Home and Kitchen
          </h1>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 mx-4 rounded-md ">
            Clothing and Accessories
          </h1>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
            Beauty
          </h1>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
            Toys and Games
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
