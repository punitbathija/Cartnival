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
            <div className="flex gap-4 ">
              <button className="flex gap-2 bg-green-500 shadow-lg p-3 rounded-md hover:scale-110 hover:drop-shadow-xl">
                Add to
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
