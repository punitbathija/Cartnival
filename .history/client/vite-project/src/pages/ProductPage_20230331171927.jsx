import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSlider from "./productSlider";
const api = import.meta.env.VITE_REACT_APP_BACKEND;
import Rating from "@mui/material/Rating";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  useEffect(() => {
    const handleFetchSingleProduct = async () => {
      await axios
        .get(`${api}product/${id}`)
        .then((res) => {
          console.log(res.data.product);
          setProductData(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchSingleProduct();
  }, []);

  return (
    <div className="flex py-4 justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
      {productData && (
        <div className="border-2 md:flex">
          <ProductSlider productData={productData} />
          <div>
            <h1 className="text-xl p-8 w-[500px] text-cyan-500 font-bold">
              {productData.name}
              <br />
              <Rating name="read-only" value={productData.ratings} readOnly />
              {productData.ratings && (
                <p className="text-sm text-black dark:text-white">
                  ({productData.reviews.length} ratings)
                </p>
              )}
            </h1>
            <p className="text-sm text-black dark:text-white">
              In {productData.category}
              <h1 className="text-3xl text-cyan-500">₹{productData.price}</h1>
            </p>
            <h1 className="text-md p-8 md:w-[500px] w-[350px] m-auto">
              <span className="font-bold">About this item</span>
              <br />
              {productData.description}
            </h1>
            <button className="flex gap-2 bg-green-500 shadow-lg p-2 rounded-md ">
              Buy now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            </button>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
