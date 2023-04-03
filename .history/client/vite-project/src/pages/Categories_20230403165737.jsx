import React from "react";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="py-10 cursor-default dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
      <h1 className="text-cyan-500 text-3xl md:text-4xl font-extralight p-12">
        Shop By Category{"    "}
        <CategoryRoundedIcon fontSize="50" />
      </h1>
      <div className="my-6 flex flex-wrap justify-center justify-items-center align-middle text-center m-auto">
        <div className="bg-[url('https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <Link to="/products/electronics" className="m-auto">
            <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
              Electronics
            </h1>
          </Link>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <Link to="/products/homeandkitchen" className="m-auto">
            <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
              Home and Kitchen
            </h1>
          </Link>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <Link to="/products/clothingandaccessories" className="m-auto">
            <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 mx-4 rounded-md ">
              Clothing and Accessories
            </h1>
          </Link>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <Link to="/products/beauty" className="m-auto">
            <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
              Beauty
            </h1>
          </Link>
        </div>
        <div className="bg-[url('https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover my-4 h-96 w-96 m-auto cursor-pointer border-2 flex justify-center justify-items-center align-middle text-center hover:scale-105">
          <Link to="/products/toysandgames">
            <h1 className="m-auto text-3xl font-extrabold dark:bg-black bg-white opacity-100 p-2 rounded-md">
              Toys and Games
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
